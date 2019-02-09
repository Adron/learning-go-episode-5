package main

import (
	"fmt"
	"golang.org/x/net/html"
	"io/ioutil"
	"net/http"
	"os"
	"strings"
)

type NodeType int32

const (
	ErrorNode NodeType = iota
	TextNode
	DocumentNode
	ElementNode
	Commentnode
	DoctypeNode
)

type Node struct {
	Type                    NodeType
	Data                    string
	Attr                    []Attribute
	FirstChild, NextSibling *Node
}

type Attribute struct {
	Key, Val string
}

func visit(links []string, n *html.Node) []string {
	if n.Type == html.ElementNode && n.Data == "a" {
		for _, a := range n.Attr {
			if a.Key == "href" {
				links = append(links, a.Val)
			}
		}
	}
	for c := n.FirstChild; c != nil; c = c.NextSibling {
		links = visit(links, c)
	}
	return links
}

func main() {

	htmlContent, err := ioutil.ReadFile("compositecode.html")
	if err != nil {
		fmt.Println(err)
	}

	htmlData := string(htmlContent)
	r := strings.NewReader(htmlData)

	doc, err := html.Parse(r)
	if err != nil {
		fmt.Fprintf(os.Stderr, "find links: %v\n", err)
		os.Exit(1)
	}
	for _, link := range visit(nil, doc) {
		fmt.Println(link)
	}

	w, i, _ := CountWordsAndImages("https://compositecode.blog")
	fmt.Printf("Words: %d\nImages: %d\n", w, i)
}

func CountWordsAndImages(url string) (words, images int, err error) {
	resp, err := http.Get(url)

	if err != nil {
		return
	}

	doc, err := html.Parse(resp.Body)
	resp.Body.Close()
	if err != nil {
		err = fmt.Errorf("parsing HTML: %s", err)
	}
	words, images = countWordsAndImages(doc)
	return
}

func countWordsAndImages(n *html.Node) (words, images int) {
	if n.Type == html.TextNode {
		words += len(strings.Split(n.Data, " "))
		return
	}

	if n.Data == "img" {
		images++
	} else {
		if n.FirstChild != nil {
			w, i := countWordsAndImages(n.FirstChild)
			words += w
			images += i
		}
		if n.NextSibling != nil {
			w, i := countWordsAndImages(n.NextSibling)
			words += w
			images += i
		}
	}
	return
}

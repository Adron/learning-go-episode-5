package main

import (
	"fmt"
	"github.com/Adron/learning-go-episode-5/universe"
)

func main() {

	p := universe.Point{12.2, 13.4}
	q := universe.Point{29.92, 123.1}

	result := universe.Distance(p, q)

	fmt.Println(result)
}

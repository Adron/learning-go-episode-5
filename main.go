package main

import "fmt"

func main() {
	var keySearchingFor string
	keySearchingFor = "Cat"
	value, err := Lookup(keySearchingFor)
	check(err)
	fmt.Println(value)
}

func check(err error) {
	if err != nil {
		fmt.Println(err)
	}
}

func Lookup(key string) (string, error) {
	if key == "Dog" {
		return "", fmt.Errorf("Key %s isn't here.", key)
	}
	if key == "Cat" {
		return "Sally", nil
	}
	return "wat", nil
}

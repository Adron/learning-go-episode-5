package main

import "fmt"

func main() {

	var this, result int
	var that, message string
	this = 2
	that = "42"

	result, message = exampleExecutor(this, that)

	fmt.Printf("%s\n%d", message, result)
}

func exampleExecutor(this int, that string) (int, string) {

	fmt.Printf("Numbers: %d, %s\n", this, that)

	return this, "This is the result: " + that
}

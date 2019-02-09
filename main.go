package main

import "fmt"

func main() {

	choose := false

	if choose {
		fmt.Println("All is well.")
	} else {
		panic(fmt.Sprintln("Oh my gerd! Ugh this!"))
	}

}

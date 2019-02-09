package main

import "fmt"

func main() {
	var keySearchingFor string
	keySearchingFor = "Cat"
	value, err := Lookup(keySearchingFor)
	check(err)
	fmt.Println(value)

	fmt.Printf("The square of 4 is %d.\n", square(4))
	fmt.Printf("The negative of 4 is %d.\n", negative(4))
	fmt.Printf("The product of 4 and 4 is %d.\n", product(4, 4))
	fmt.Printf("The addition of 4 and 4 is %d.\n", add(4, 4))
	fmt.Printf("The division of 8 and 4 is %d.\n", divide(8, 4))

	f := squares()
	fmt.Println(f())
	fmt.Println(f())
	fmt.Println(f())
	fmt.Println(f())
	fmt.Println(f())
	fmt.Println(f())
	fmt.Println(f())
	fmt.Println(f())
	fmt.Println(f())
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

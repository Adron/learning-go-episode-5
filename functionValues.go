package main

func square(n int) int     { return n * n }
func negative(n int) int   { return -n }
func product(m, n int) int { return m * n }
func add(m, n int) int     { return m + n }
func divide(m, n int) int  { return m / n }

func squares() func() int {
	var x int
	return func() int {
		x++
		return x * x
	}
}

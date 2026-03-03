package main

import (
	"fmt"
	"os"
)

func main() {
	args := os.Args[1:] // exclude program
	fmt.Println(args)
}

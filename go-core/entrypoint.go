package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {
		res.Header().Set("Content-Type", "application/json")
		fmt.Fprint(res, "\"hello world\"")
	})
	log.Fatal(http.ListenAndServe(":3000", nil))
}

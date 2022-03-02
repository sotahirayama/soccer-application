package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
)

type Event struct {
    Id int `json:"id"`
    Name   string `json:"name"`
    Place    string `json:"place"`
    // Date string `json:"date"`
	Location string `json:"location"`
}

type Events []Event

func enableCors(w *http.ResponseWriter) {
    (*w).Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
}

func homePage(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Welcome to the HomePage!")
    fmt.Println("Endpoint Hit: homePage")
}

func handleRequests() {
    
    http.HandleFunc("/", homePage)
    http.HandleFunc("/events", returnAllEvents)
    log.Fatal(http.ListenAndServe(":8081", nil))
}
// func fetchPlayers(w http.ResponseWriter, r *http.Request) {
//     db := GetDBConn()

//     db.Find(&players)
//     fmt.Println(players)
//     profJson, _ := json.Marshal(players)
//     fmt.Fprintf(w, string(profJson))
// }
// func GetDBConn() *gorm.DB {
//     db, err := gorm.Open(GetDBConfig())
//     if err != nil {
//         panic(err)
//     }

//     db.LogMode(true)
//     return db
// }
func returnAllEvents(w http.ResponseWriter, r *http.Request) {
    enableCors(&w)
    events := Events{}
    for i := 0; i < 10; i++ {
        t := "Hello_%d"
        events = append(
            events,
            Event{Id: i,Name: fmt.Sprintf(t, i), Place: "Showa kinen kouen", Location: "lat:35.69575,lng:139.77521"})
    }
    fmt.Println("Endpoint Hit: returnAllEvents")
    json.NewEncoder(w).Encode(events)
}

func main() {
    handleRequests()
}
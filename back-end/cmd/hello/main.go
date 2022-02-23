package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
)

type Event struct {
    Title   string `json:"Title"`
    Desc    string `json:"desc"`
    // Date string `json:"date"`
	Location string `json:"location"`
}

type Events []Event

func homePage(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Welcome to the HomePage!")
    fmt.Println("Endpoint Hit: homePage")
}

func handleRequests() {
    http.HandleFunc("/", homePage)
    http.HandleFunc("/events", returnAllEvents)
    log.Fatal(http.ListenAndServe(":8081", nil))
}
func fetchPlayers(w http.ResponseWriter, r *http.Request) {
    db := GetDBConn()

    db.Find(&players)
    fmt.Println(players)
    profJson, _ := json.Marshal(players)
    fmt.Fprintf(w, string(profJson))
}
func GetDBConn() *gorm.DB {
    db, err := gorm.Open(GetDBConfig())
    if err != nil {
        panic(err)
    }

    db.LogMode(true)
    return db
}
func returnAllEvents(w http.ResponseWriter, r *http.Request) {
    events := Events{}
    for i := 0; i < 10; i++ {
        title := "Hello_%d"
        events = append(
            events,
            Event{Title: fmt.Sprintf(title, i), Desc: "Event Description", Location: "Event Location"})
    }
    fmt.Println("Endpoint Hit: returnAllEvents")
    json.NewEncoder(w).Encode(events)
}

func main() {
    handleRequests()
}
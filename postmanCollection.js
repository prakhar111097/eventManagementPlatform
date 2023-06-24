{
	"info": {
		"_postman_id": "cdc417c2-a5fd-43d7-bef8-00c8738e7e1a",
		"name": "EventManagement",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Unknown Route",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "localhost:3000/hello",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"hello"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Events",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "localhost:3000/event/list",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"event",
						"list"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get events by id",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "localhost:3000/event/list/123",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"event",
						"list",
						"123"
					]
				}
			},
			"response": []
		},
		{
			"name": "Add an event",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"id\": \"123\",\r\n    \"eventName\":\"Concert\",\r\n    \"eventDate\": \"2023-06-23\",\r\n    \"organizer\":\"NorthLadder\",\r\n    \"email\":\"xyz@northladder.com\",\r\n    \"phone\":\"7894561203\",\r\n    \"location\":{\r\n        \"street\":\"Lajpat\",\r\n        \"city\":\"Delhi\",\r\n        \"state\":\"Delhi\",\r\n        \"zip\":\"110011\"\r\n    }\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:3000/event",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"event"
					]
				}
			},
			"response": []
		},
		{
			"name": "Update Event",
			"request": {
				"method": "PATCH",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n     \"eventDate\": \"2023-06-28T08:22:06.000Z\",\r\n     \"location\":{\r\n        \"street\":\"Lajpat Nagar\",\r\n        \"city\":\"Delhi\",\r\n        \"state\":\"Delhi\",\r\n        \"zip\":\"110011\"\r\n    }\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:3000/event/123",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"event",
						"123"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete Event",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "localhost:3000/event/123",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"event",
						"123"
					]
				}
			},
			"response": []
		}
	]
}
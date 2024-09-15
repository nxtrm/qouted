# Quoted. (Paused)

A ui for your forgotten Kindle highlights. Made in TypeScript and Python

I made Quoted when I noticed that I rarely came back to highlights from various non-fiction books I started reading. I needed something clean, somewhing where I could practice my coding skills and something that would remind me of the books that I've read.

## Showcase

### Main screen
<img src= "https://github.com/user-attachments/assets/e6a541ba-1f8a-4d1b-8d43-c24348185929" width=700 height=750>

- This is the main screen. It shows a randomly picked quote from the database, allows you to remove it (in case something you selected by accident was not filtered out during import(more about it later)), like thie quote, which will save it into your account, and go to the next quote.
- Some additional data like a timestamp and the book data are shown too.

### Search

<img src="https://github.com/user-attachments/assets/d1844242-c63f-4903-9bc4-9b1b5641a911" width=700 height=750>

- It is also possible to search through quotes, books and authors, for example:

<img src="https://github.com/user-attachments/assets/10923924-0fa7-4c33-b572-81a73cb58080" width=400 height=100>

* There is also some sign in and account cretion functionality, but work still was being done on the account section when I had to pause the project.
<img src="https://github.com/user-attachments/assets/dc0ec653-43af-44cc-b342-a3b61e52d00a" width=500 height=270>

## How to:
- Install necessary libraries
- Run `the import_to_mongo.py` script in  ./Backend, having updated the clippings path and database connection:
<img src="https://github.com/user-attachments/assets/8e21a665-03cb-45fa-ae11-cc635ee2dd30" width=300 height=170>
- Run `pyapi.py`
- Navigate to /quoted-f
- Run `npm run dev`

## Libraries and frameworks used:
Frontend: React, Zusatand, Axios, Chakra UI
Backend: Flas, bcrypt, pymongo



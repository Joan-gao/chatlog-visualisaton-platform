<h1 align="center">Chatlog Visualisaton Platform</h1>

## Introduction

This project represents our solution for Challenge 4 of the WAPOL x WADSIH Hackathon: "Named Entity Recognition and Relationship Extraction from Investigative Chats." We developed an integrated system featuring global data visualization, detailed chat log analysis, and correlation analysis between chat logs and entities.

## **Technologies Use**

1. **Frontend**: React, JavaScript
2. **UI Toolkit**: Ant Design
3. **3D Knowledge Graph**: Three.js, Neo4j
4. **Map API**: Baidu.com
5. **AI Tools**: ChatGPT, Monika, Kimi

## **Core Features**

**1. Overview Dashboard (Main Page)**

- **Functionality**: Provides a summary of all chat logs, including crime types, overall timeline, monthly changes in chat logs, crime location map, and chat log history timeline.

**2. Single Chat Log Analysis (Subpage)**

- **Functionality**: Offers detailed data analysis of a single chat log, including chat log summary, single chat log history, entity relationships (time, person, location, event), and simulated route generation.

**3. Smart Database (Subpage)**

- **Functionality**: Allows users to select multiple chat logs or entities for custom associative analysis, discovering hidden relationships and patterns that single analyses may miss.

## **Technical Highlights**

1. **Rapid Development**: Achieved comprehensive data analysis functionalities within 48 hours using Ant Design for platform construction and chart design, meeting various data needs.

2. **Entity Relationship Visualization**: In the single chat log dashboard, entity relationships (time, person, location, event) are captured from chat logs to reveal connections between entities and reconstruct events. The location and timeline data generate route previews, allowing users to visualize and simulate routes interactively.

3. **Associative Analysis with 3D Knowledge Graph**: The smart database page combines chatbot and 3D knowledge graph technologies to generate associative analysis graphs online. The chatbot queries data relationships, which are then visualized in a 3D knowledge graph, enabling users to explore connections between nodes.

## **Data Analysis Examples**

**1. Overall Timeline**

| ID  | Time             | Event                     |
| --- | ---------------- | ------------------------- |
| 105 | 2023-08-20 06:45 | Initiated surveillance... |
| 200 | 2023-08-20 07:35 | Observed suspect...       |
| 003 | 2023-08-20 08:25 | Received ANPR hit...      |
| 023 | 2023-08-20 09:15 | Followed suspect...       |

**2. Key Entities Overview**

| ID  | Entity          | Frequency |
| --- | --------------- | --------- |
| 1   | Carlos Mendes   | 10        |
| 2   | Jane Doe        | 8         |
| 3   | 1234 Elm Street | 5         |
| 4   | 5678 Oak Avenue | 4         |

**3. Relationship Network Overview**

| Time             | Source               | Location     | Event Description                                    |
| ---------------- | -------------------- | ------------ | ---------------------------------------------------- |
| 2023-08-20 10:00 | Officer David Wilson | Perth CBD    | Discovered drug trafficking activity near Perth CBD. |
| 2023-08-20 14:15 | CCTV Footage         | Joondalup    | Captured an image of a suspicious person.            |
| 2023-08-20 19:30 | Registered Address   | Mount Lawley | Suspect's registered address identified.             |
| 2023-08-21 21:45 | Anonymous Report     | Joondalup    | Anonymous report of someone dealing drugs nearby.    |

**4. Chat Log Summary**

| Time             | Officer              | Summary                                                                             | Image |
| ---------------- | -------------------- | ----------------------------------------------------------------------------------- | ----- |
| 2023-08-20 06:45 | Officer John Roberts | Initiated surveillance on suspect Carlos Mendes at 1234 Elm Street.                 | N/A   |
| 2023-08-20 07:35 | Officer Emily Clark  | Observed suspect Carlos Mendes meeting with accomplice Jane Doe at 5678 Oak Avenue. |       |
| 2023-08-20 08:25 | Officer David Wilson | Received ANPR hit on vehicle registration JKL 9876 near Maple Street.               |       |
| 2023-08-20 09:15 | Officer Laura Jones  | Followed suspect vehicle to 5678 Pine Road, Perth.                                  |       |
| 2023-08-20 10:05 | Officer John Roberts | Obtained CCTV footage from nearby business at 5678 Pine Road.                       |       |

## Links:
- ([Demo Video](https://youtu.be/y_t_bSmGGlI))

- ([Pitch Deck](https://drive.google.com/file/d/1a72KiaWNZy_RF3DWihqkiE9QrL39gGF1/view?usp=sharing))

- ([linkedin Post](https://www.linkedin.com/posts/xinyi-gao-cn_police-hackathon-genai-activity-7210819530393075712-B2ML?utm_source=share&utm_medium=member_desktop))

## Contributors

- [Xinyi Gao](www.linkedin.com/in/kahshinang): Product Design, Front-end Development
- [Li Cui](www.linkedin.com/in/li-cui-73809027b): Data Analysis, AI integration

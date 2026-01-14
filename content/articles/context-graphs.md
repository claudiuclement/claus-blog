---
title: "Context Graphs"
date: "2026-01-14"
excerpt: "We currently suffer from a specific kind of amnesia in enterprise software. We store data output but not the decisions that led to that output. We store the what, but lose the why."
tags: ["AI"]
---

We currently suffer from a specific kind of amnesia in enterprise software.

Systems like Salesforce or ClickUp are systems of record for *output*. They store the final number, the closed ticket, or the finished roadmap. **But they do not store the decisions that led to that data.** Moving on we will call this the **context**.

We store the *what*, but we lose the *why*.

Jaya Gupta recently framed this as the need for "Context Graphs." in the post [*AI’s next trillion dollar opportunity*](https://x.com/JayaGup10/status/2003525933534179480) on X. The thesis is that we need an architecture that captures the underlying reasoning behind the data.

To understand why this matters, look at where current Large Language Models (LLMs) fail.

**The Linear Trap**

LLMs struggle with relational reasoning because they process information sequentially, while valid reasoning often requires a structural view.

Take the "Alice" problem from the paper [Reasoning with Graphs](https://arxiv.org/pdf/2501.07845):

“Alice has 3 sisters. Her mother has 1 sister who does not have children \- she has 7 nephews and nieces and also 2 brothers. Alice’s father has a brother who has 5 nephews and nieces in total, and who has also 1 son. How many cousins does Alice’s sister have?”

To a human, this is a logic puzzle. We draw a mental map of the family tree. To an LLM, this is a sequence of tokens. The model gets headaches because it tries to predict the next word rather than understanding the relationship between the entities.

This is where Context Graphs come in. They force the AI to draw relationships between data points rather than just ingesting them as a stream of text.

**Types of Knowledge**

The problem is hard because there are two types of knowledge. Explicit knowledge is the tip of the iceberg, rows in a database. Implicit knowledge is the reasoning in people’s heads, that is ephemeral and not stored anywhere. 

**The Missing Link**

However, building this is not just a technical problem. It is an anthropological one. We have to solve for two things: collection and retrieval.

**1\. Collecting the Context** In a typical company, data lives in silos. The sales team reports one ARR figure in Salesforce; Finance reports a slightly different one in QuickBooks.

The discrepancy isn't a software bug; it's a context gap.

The "truth" of why those numbers differ lives in a Zoom meeting transcript where the sales VP redefined "active user," or in a watercooler chat between finance managers. That is the implicit context.

The enterprise of the future needs to capture these ephemeral moments: the meetings, the chats, the decision logs, and serve them to the AI as a structured graph.

**2\. Efficient Retrieval** Once you have the context, you need to query it. We are seeing sparks of how to do this in approaches like [Reasoning Graph-enhanced Exemplar Retrieval](https://arxiv.org/pdf/2409.11147). The standard has not been found yet. We know we need to move toward something that can traverse the graph of a decision.

**The Cost of Context**

The ideal scenario adds a layer of reasoning on top of the outputs. The layer of reasoning is a distilled version of Zoom calls, slack messages, emails. The question is how much of that is noise and how much is actual signal. The risk is giving a hallucinogen pill to the LLM every time we add context if it’s not clearly defined.  

**The Future Interface**

If we solve this, the software we build changes.

Jamil Vall argues in [*Long Live Systems of Record*](https://cloudedjudgement.substack.com/p/clouded-judgement-121225-long-live) that backends will evolve from human-oriented architectures to agentic workflows. I agree.

If the system understands context, you don't need to stare at dashboards to figure out why a number changed. You just ask. The interface of the future looks like a lot more chatting and a lot less checking of widgets. For the very short term, what we are used to (dashboards, widgets, tables) will stay. For the future they’ll only live for purists. 

We are moving from systems of record to systems of reasoning.


---
title: "AI Should Make Us Think More"
slug: ai-should-make-us-think-more
date: 2026-10-08
postTags: [AI, Programming, Management, Leadership]
description: >
  What I am seeing in teams using AI, why more output is not always helping,
  and how we can build better software while continuing to learn.
---

The more I use AI and talk with other managers, the more I see a gap between what these tools could help us do and what is actually happening in some teams.

We are spending money on powerful tools that allow us to produce code, documents, and plans in minutes, but in the situations I am seeing, the improvement in completed work is often small. Sometimes a ticket even takes longer than before, and when I look at how some junior developers are using these tools, I also worry about how much they are learning along the way.

I don't really like this direction, although I think we are still in time to adjust it. I have seen people who already work well become even better with AI, which gives me confidence that there is a lot of potential here if we pay attention to how we use it.

A pull request is one place where the problem becomes visible: a developer generates a lot of code in a few minutes and sends it for review after barely reading it. Another developer then spends hours understanding the changes, finding mistakes, and explaining why part of the solution does not fit the project. The first person may have saved time, but once we include all that extra review work, the team may have lost it.

Something similar happens with documents and task analysis, where a plan looks complete but misses a product rule or suggests building something we already have. Sometimes even comments from the AI are left in the document, although they have nothing to do with the work, and as you read it, you realise that the person sharing the plan has not understood the full context either.

When this happens, generating a better document is only part of the work, because the developer still needs to go back, understand the project, and decide what actually needs to be done and why.

I also notice it in written conversations, when I ask someone a question and receive a long answer that sounds like it came straight from an AI tool. After reading it, I still need to understand whether they checked the code, whether they agree with the suggestion, and what they would actually do.

AI can help us write clearly, and I am happy to use it for that, but when we send an answer, we should have read it and be able to explain it. Without that personal contribution, it starts to feel as if I am talking to the tool through another person.

The same thing happens in reviews: one person creates a pull request with AI, an AI tool adds comments, and someone uses another tool to answer those comments, pasting the response without changing anything. As the thread grows and everyone has more text to read, I find myself wondering what game we are playing and who is actually making the decisions.

An automated comment can catch a real problem, but it can also miss the context, so someone still needs to check whether the problem exists, decide what to change, and verify the result. A conversation between tools gives us very little confidence unless a person has done that work and understood the outcome.

This habit of reaching for AI also appears in smaller technical decisions, where everything seems to become an AI skill, including tasks that a small, tested script could handle reliably. Instructions can be useful, but a model can skip a step or interpret it differently, which is why I would first consider a script for a fixed sequence of actions. A skill can explain when to run that script, without asking the model to work out the same steps every time.

I have similar concerns about model choice, because the newest and most expensive model can become the default before anyone has considered the task. With a clear question, the right context, and a short plan, a smaller or older model may be able to do the job just as well. Before deciding what works best, we should check both the result and the total cost, including the time and money spent on retries and corrections.

Beyond the time and money involved, what worries me most is the effect on learning. Some less experienced developers are producing better looking code with AI, but I do not see the same improvement in their understanding of the product or its architecture. They finish a task without learning why the solution works, where it belongs, or when it would fail. This can happen to an experienced developer who is new to a domain too, because years of writing code do not give us automatic knowledge of a new product.

A junior developer who keeps accepting answers without questioning them can remain dependent for a long time, while someone who asks for explanations, checks the answers against the project, and discusses them with a teammate has a real opportunity to learn. Managers need to make room for that learning, because if we reward only how quickly a pull request appears, we help create the problem ourselves.

Sometimes I wonder whether we are helping make the sentence "developers will all be replaced by AI" come true. If we reduce our contribution to passing prompts and copying answers, we make it harder to explain the value we bring, although I don't think that future is decided. We still have the opportunity to build the skills that make our work useful and to help others do the same.

To me, the developer's role becomes even more connected to understanding the product, which means knowing what the team is building, who needs it, and which rules matter. With that knowledge, we can guide AI, give it the right context, and check that the result respects our standards and conventions.

As AI helps with implementation, we can give more attention to meaningful tests and manual checks, using our knowledge of the change to decide how much review it needs. A small change we understand may need only a quick review, while a change to payments or permissions deserves more care, and that judgement remains part of our job.

There are a few practical things I would suggest doing to make sure we are using AI in a way that helps us learn and build better software:

1. **Explain the task before asking for code.** Write a few sentences about the problem, the expected behaviour, and the parts of the project involved, so you can give the AI the relevant context and a clear way to check success. If you cannot explain those yet, spend some time reading the code or talking with a teammate before moving on.

2. **Read your changes before asking someone else to review them.** Keep the pull request small by removing unrelated changes, then check the tests and try the feature yourself before sharing it. When you ask for a review, be ready to explain the important decisions and point out anything you are still unsure about.

3. **Use AI to learn something on every task.** Ask why a solution fits, what could go wrong, and whether the project already has a similar pattern, then check those answers against the actual code. Try explaining the result in your own words, and discuss anything you still don't understand with a more experienced teammate.

4. **Keep communication useful.** Read documents and messages before sharing them, making sure they say what you mean and include the context the reader needs. In a review, verify an AI suggestion before posting it and explain the specific issue and why it matters, remembering that a few clear sentences can save the whole team time.

5. **Choose tools with a reason.** Consider a tested script for repeatable steps, and when a task benefits from AI, compare a smaller model with the one you normally use on a few examples you can evaluate. Keep the cheaper option where it meets the same needs, and use a stronger model where the results justify it.

6. **Look at the whole team's time.** In the next retrospective, take a few completed tickets and discuss the time spent on generation, review, corrections, and testing, together with tool costs and what people learned. This gives managers a better picture than counting code or pull requests, and helps the team choose one habit to improve.

I still see a very positive future for developers, because these tools give us room to explore more ideas, ask better questions, and spend more time understanding what we are building. Making the most of that opportunity means using our minds more than before, and we can start building that habit in the way we approach our work today.

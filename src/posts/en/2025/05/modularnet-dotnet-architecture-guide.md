---
title: "Building Scalable Apps with ModularNet: A Layered .NET Architecture"
slug: modularnet-dotnet-architecture-guide
date: 2025-05-01
postTags: [Programming]
description: >
  Learn about ModularNet, a layered .NET architecture designed for testability and separation of concerns using Firebase, Azure, and SOLID principles.
---

ModularNet is a layered, modular architecture designed for building robust, maintainable, and testable **.NET applications**. It emphasizes a strong separation of concerns, leveraging Dependency Injection and interface-based communication between layers.

The core idea is to decouple the application’s core business logic from both the user interface and infrastructure concerns (like databases and external APIs). This is achieved through distinct layers where dependencies flow inwards towards a central, simple **Domain layer**.

This template comes "batteries-included" with pre-configured support for **Google Firebase** (Auth), **Azure Key Vault** (Secrets), and **Serilog** (Logging), making it an almost-ready-to-use foundation for Web APIs, Worker Services, or Lambdas.

---

## Architecture Layers



The architecture is organized into six distinct logical areas:

### 1. Domain Layer
Contains **Plain Old CLR Objects (POCOs)** representing data models (Entities). These are passive data containers without logic. It also holds shared Enums, Custom Exceptions, and Request/Response DTOs.
* **Purpose:** Acts as the shared kernel defining the "shape" of data across the entire solution.

### 2. Application Layer (Runtime)
The entry points of your system, such as API Controllers, Console logic, or Blazor components.
* **Interaction:** Communicates strictly with the Business Logic layer via interfaces received through Dependency Injection.

### 3. Business Logic Layer
The "brain" of the application. It contains core rules, use cases, and orchestration.
* **Interaction:** Implements the interfaces consumed by the Application Layer and consumes interfaces provided by the Infrastructure layer.

### 4. Infrastructure Layer
Defines and implements the mechanisms for interacting with external systems (DB access, caching, API clients).
* **Purpose:** Acts as a bridge to external resources. The implementations contain technical details (ORM logic, HTTP calls) but minimal business logic.

### 5. Shared Layer
A utility project containing stateless helper methods and common utilities needed by both Business Logic and Infrastructure.

### 6. External Systems
Resources outside the application code, such as **MySQL**, **Redis**, **Azure Communication Services**, and **Firebase**.

---

## Tech Stack & Integration

ModularNet is configured to work out-of-the-box with modern cloud-native tools:

| Feature | Technology |
| :--- | :--- |
| **Authentication** | Firebase Authentication |
| **Authorization** | Microsoft.Identity (Scopes/Roles) |
| **Emailing** | Azure Communication Services |
| **Secrets** | Azure Key Vault |
| **Logging** | Serilog |
| **Caching** | Azure Cache for Redis |
| **Database** | Microsoft MySQL |

---

## Why Choose ModularNet?

* **High Testability:** Mock infrastructure dependencies easily to unit test business logic in isolation.
* **Modularity:** Layers can be implemented as separate projects, promoting clean boundaries.
* **Maintainability:** Swap a database or email provider in the Infrastructure layer with minimal impact on the core logic.
* **Anemic Domain Model:** By keeping logic out of the Domain POCOs, the architecture avoids "hidden magic" and stays transparent.

## ModularNet vs. Onion Architecture

While inspired by Onion and Clean Architecture, ModularNet makes a few specific pragmatic choices:

1.  **Interface Ownership:** In ModularNet, the Infrastructure layer defines the repository interfaces it implements, which the Business Logic then consumes.
2.  **Anemic Domain:** Unlike strict DDD (Domain-Driven Design), ModularNet uses simple POCOs for a cleaner, more predictable data flow.
3.  **Centralized DTOs:** All data transfer objects reside in the Domain layer for global accessibility, rather than being split into the Business layer.

For more details and in-depth explanations about the solution, please visit the **Wiki section** of the repository. We welcome contributions and feedback via GitHub Issues and Discussions!
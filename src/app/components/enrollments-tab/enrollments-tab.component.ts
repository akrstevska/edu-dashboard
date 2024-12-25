import {Component, Input, ViewChild} from '@angular/core';
import {Enrollment} from '../../../models/enrollment';
import {NgForOf} from '@angular/common';
import {EnrollmentDetailsComponent} from '../enrollment-details/enrollment-details.component';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatPaginator} from '@angular/material/paginator';
import {Lesson} from '../../../models/lesson';

@Component({
  selector: 'app-enrollments-tab',
  imports: [
    NgForOf,
    EnrollmentDetailsComponent,
    MatFormField,
    MatInput,
    MatLabel,
    MatPaginator
  ],
  templateUrl: './enrollments-tab.component.html',
  styleUrl: './enrollments-tab.component.css'
})
export class EnrollmentsTabComponent {
  @Input({required: true})
  course_id: number = 0;
  enrollments: Enrollment[] = [
    {
      "id": 26,
      "student": {
        "id": 2112,
        "firstName": "Bob",
        "lastName": "Brown",
        "email": "bob.brown@example.com",
        "age": 22,
        "currentYear": 3
      },
      "course": {
        "id": 528,
        "title": "Philosophy 101 Test",
        "description": "Philosophical ideas and movements throughout history.",
        "instructor": {
          "id": 107,
          "firstName": "Lisa",
          "lastName": "Wilson",
          "email": "lisa.wilson@university.com",
          "department": "Philosophy"
        },
        "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
        "semester": "Spring 2025"
      },
      "enrollmentDate": "2024-03-01T00:00:00.000+00:00",
      "grade": 80.0,
      "completionStatus": true,
      "progress": {
        "id": 10,
        "completedLessons": [
          {
            "id": 115,
            "title": "Lesson 6: Software Development Methods",
            "description": "Software development life cycle and methodologies.",
            "content": "Learn about basic software development methodologies like Waterfall, Agile, and Scrum.",
            "course": {
              "id": 521,
              "title": "Test",
              "description": "An introduction to programming and problem solving.",
              "instructor": {
                "id": 100,
                "firstName": "Jane",
                "lastName": "Doe",
                "email": "jane.doe@university.com",
                "department": "Computer Science"
              },
              "enrollmentDeadline": "2025-01-10T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },
          },
          {
            "id": 116,
            "title": "Lesson 7: Introduction to Computer Networks",
            "description": "Fundamentals of computer networks.",
            "content": "This lesson introduces computer networks and their components, including the internet, intranet, and protocols like TCP/IP.",
            "course": {
              "id": 521,
              "title": "Test",
              "description": "An introduction to programming and problem solving.",
              "instructor": {
                "id": 100,
                "firstName": "Jane",
                "lastName": "Doe",
                "email": "jane.doe@university.com",
                "department": "Computer Science"
              },
              "enrollmentDeadline": "2025-01-10T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },
          },
          {
            "id": 118,
            "title": "Lesson 9: Cybersecurity Basics",
            "description": "Introduction to cybersecurity practices.",
            "content": "Explore the concepts of cybersecurity, including encryption, firewalls, and secure communication protocols.",
            "course": {
              "id": 521,
              "title": "Test",
              "description": "An introduction to programming and problem solving.",
              "instructor": {
                "id": 100,
                "firstName": "Jane",
                "lastName": "Doe",
                "email": "jane.doe@university.com",
                "department": "Computer Science"
              },
              "enrollmentDeadline": "2025-01-10T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },
          }
        ],
        "currentLesson": {
          "id": 115,
          "title": "Lesson 6: Software Development Methods",
          "description": "Software development life cycle and methodologies.",
          "content": "Learn about basic software development methodologies like Waterfall, Agile, and Scrum.",
          "course": {
            "id": 521,
            "title": "Test",
            "description": "An introduction to programming and problem solving.",
            "instructor": {
              "id": 100,
              "firstName": "Jane",
              "lastName": "Doe",
              "email": "jane.doe@university.com",
              "department": "Computer Science"
            },
            "enrollmentDeadline": "2025-01-10T23:59:59.000+00:00",
            "semester": "Spring 2025"
          },

        },
        "lastAccess": "2024-10-22T14:00:00.000+00:00",
        "overallProgress": 70.0
      }
    },
    {
      "id": 28,
      "student": {
        "id": 2114,
        "firstName": "David",
        "lastName": "Davis",
        "email": "david.davis@example.com",
        "age": 23,
        "currentYear": 4
      },
      "course": {
        "id": 528,
        "title": "Philosophy 101 Test",
        "description": "Philosophical ideas and movements throughout history.",
        "instructor": {
          "id": 107,
          "firstName": "Lisa",
          "lastName": "Wilson",
          "email": "lisa.wilson@university.com",
          "department": "Philosophy"
        },
        "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
        "semester": "Spring 2025"
      },
      "enrollmentDate": "2024-01-25T00:00:00.000+00:00",
      "grade": 62.0,
      "completionStatus": true,
      "progress": {
        "id": 12,
        "completedLessons": [
          {
            "id": 125,
            "title": "Lesson 6: Regression Analysis",
            "description": "Regression models and applications.",
            "content": "Explore the concepts of regression analysis, its types, and how it is used to predict numerical values from data.",
            "course": {
              "id": 522,
              "title": "Mathematics 101",
              "description": "Basic principles of algebra and geometry.",
              "instructor": {
                "id": 101,
                "firstName": "John",
                "lastName": "Smith",
                "email": "john.smith@university.com",
                "department": "Mathematics"
              },
              "enrollmentDeadline": "2025-01-15T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 126,
            "title": "Lesson 7: Classification Models",
            "description": "Classification techniques and algorithms.",
            "content": "Understand classification algorithms, such as decision trees and support vector machines (SVMs), used for predicting categories.",
            "course": {
              "id": 522,
              "title": "Mathematics 101",
              "description": "Basic principles of algebra and geometry.",
              "instructor": {
                "id": 101,
                "firstName": "John",
                "lastName": "Smith",
                "email": "john.smith@university.com",
                "department": "Mathematics"
              },
              "enrollmentDeadline": "2025-01-15T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 128,
            "title": "Lesson 9: Deep Learning",
            "description": "Introduction to deep learning and neural networks.",
            "content": "Learn about deep learning and neural networks, advanced topics in machine learning, and their applications in fields like image recognition and natural language processing.",
            "course": {
              "id": 522,
              "title": "Mathematics 101",
              "description": "Basic principles of algebra and geometry.",
              "instructor": {
                "id": 101,
                "firstName": "John",
                "lastName": "Smith",
                "email": "john.smith@university.com",
                "department": "Mathematics"
              },
              "enrollmentDeadline": "2025-01-15T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          }
        ],
        "currentLesson": {
          "id": 130,
          "title": "Lesson 1: Introduction to Web Development",
          "description": "Introduction to web development technologies.",
          "content": "In this lesson, we explore the basics of web development, including the client-server model and the role of HTML, CSS, and JavaScript in building websites.",
          "course": {
            "id": 523,
            "title": "Physics for Beginners",
            "description": "Exploration of the fundamental principles of physics.",
            "instructor": {
              "id": 102,
              "firstName": "Emily",
              "lastName": "Jones",
              "email": "emily.jones@university.com",
              "department": "Physics"
            },
            "enrollmentDeadline": "2025-01-20T23:59:59.000+00:00",
            "semester": "Spring 2025"
          },

        },
        "lastAccess": "2024-11-10T14:00:00.000+00:00",
        "overallProgress": 50.0
      }
    },
    {
      "id": 29,
      "student": {
        "id": 2115,
        "firstName": "Emma",
        "lastName": "Evans",
        "email": "emma.evans@example.com",
        "age": 20,
        "currentYear": 2
      },
      "course": {
        "id": 528,
        "title": "Philosophy 101 Test",
        "description": "Philosophical ideas and movements throughout history.",
        "instructor": {
          "id": 107,
          "firstName": "Lisa",
          "lastName": "Wilson",
          "email": "lisa.wilson@university.com",
          "department": "Philosophy"
        },
        "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
        "semester": "Spring 2025"
      },
      "enrollmentDate": "2024-02-15T00:00:00.000+00:00",
      "grade": 40.0,
      "completionStatus": true,
      "progress": {
        "id": 13,
        "completedLessons": [
          {
            "id": 130,
            "title": "Lesson 1: Introduction to Web Development",
            "description": "Introduction to web development technologies.",
            "content": "In this lesson, we explore the basics of web development, including the client-server model and the role of HTML, CSS, and JavaScript in building websites.",
            "course": {
              "id": 523,
              "title": "Physics for Beginners",
              "description": "Exploration of the fundamental principles of physics.",
              "instructor": {
                "id": 102,
                "firstName": "Emily",
                "lastName": "Jones",
                "email": "emily.jones@university.com",
                "department": "Physics"
              },
              "enrollmentDeadline": "2025-01-20T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 132,
            "title": "Lesson 3: CSS Basics",
            "description": "CSS for styling websites.",
            "content": "Explore CSS and how to style web pages using selectors, properties, and values. Learn about layout techniques like flexbox and grid.",
            "course": {
              "id": 523,
              "title": "Physics for Beginners",
              "description": "Exploration of the fundamental principles of physics.",
              "instructor": {
                "id": 102,
                "firstName": "Emily",
                "lastName": "Jones",
                "email": "emily.jones@university.com",
                "department": "Physics"
              },
              "enrollmentDeadline": "2025-01-20T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 134,
            "title": "Lesson 5: DOM Manipulation",
            "description": "DOM manipulation with JavaScript.",
            "content": "Learn about the DOM (Document Object Model) and how JavaScript can interact with and manipulate HTML elements dynamically.",
            "course": {
              "id": 523,
              "title": "Physics for Beginners",
              "description": "Exploration of the fundamental principles of physics.",
              "instructor": {
                "id": 102,
                "firstName": "Emily",
                "lastName": "Jones",
                "email": "emily.jones@university.com",
                "department": "Physics"
              },
              "enrollmentDeadline": "2025-01-20T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          }
        ],
        "currentLesson": {
          "id": 135,
          "title": "Lesson 6: Responsive Web Design",
          "description": "Responsive design for mobile-friendly websites.",
          "content": "This lesson covers responsive web design, including media queries and mobile-first design techniques.",
          "course": {
            "id": 523,
            "title": "Physics for Beginners",
            "description": "Exploration of the fundamental principles of physics.",
            "instructor": {
              "id": 102,
              "firstName": "Emily",
              "lastName": "Jones",
              "email": "emily.jones@university.com",
              "department": "Physics"
            },
            "enrollmentDeadline": "2025-01-20T23:59:59.000+00:00",
            "semester": "Spring 2025"
          },

        },
        "lastAccess": "2024-10-22T14:55:00.000+00:00",
        "overallProgress": 80.0
      }
    },
    {
      "id": 30,
      "student": {
        "id": 2116,
        "firstName": "Frank",
        "lastName": "Foster",
        "email": "frank.foster@example.com",
        "age": 21,
        "currentYear": 3
      },
      "course": {
        "id": 528,
        "title": "Philosophy 101 Test",
        "description": "Philosophical ideas and movements throughout history.",
        "instructor": {
          "id": 107,
          "firstName": "Lisa",
          "lastName": "Wilson",
          "email": "lisa.wilson@university.com",
          "department": "Philosophy"
        },
        "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
        "semester": "Spring 2025"
      },
      "enrollmentDate": "2024-03-18T00:00:00.000+00:00",
      "grade": 76.0,
      "completionStatus": true,
      "progress": {
        "id": 14,
        "completedLessons": [
          {
            "id": 135,
            "title": "Lesson 6: Responsive Web Design",
            "description": "Responsive design for mobile-friendly websites.",
            "content": "This lesson covers responsive web design, including media queries and mobile-first design techniques.",
            "course": {
              "id": 523,
              "title": "Physics for Beginners",
              "description": "Exploration of the fundamental principles of physics.",
              "instructor": {
                "id": 102,
                "firstName": "Emily",
                "lastName": "Jones",
                "email": "emily.jones@university.com",
                "department": "Physics"
              },
              "enrollmentDeadline": "2025-01-20T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 136,
            "title": "Lesson 7: Front-End Frameworks",
            "description": "Introduction to front-end frameworks.",
            "content": "Learn about front-end frameworks like Bootstrap that simplify the design and development of responsive websites.",
            "course": {
              "id": 523,
              "title": "Physics for Beginners",
              "description": "Exploration of the fundamental principles of physics.",
              "instructor": {
                "id": 102,
                "firstName": "Emily",
                "lastName": "Jones",
                "email": "emily.jones@university.com",
                "department": "Physics"
              },
              "enrollmentDeadline": "2025-01-20T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 138,
            "title": "Lesson 9: APIs and AJAX",
            "description": "Working with APIs in web development.",
            "content": "Learn about APIs (Application Programming Interfaces) and how to interact with external services using AJAX and Fetch API.",
            "course": {
              "id": 523,
              "title": "Physics for Beginners",
              "description": "Exploration of the fundamental principles of physics.",
              "instructor": {
                "id": 102,
                "firstName": "Emily",
                "lastName": "Jones",
                "email": "emily.jones@university.com",
                "department": "Physics"
              },
              "enrollmentDeadline": "2025-01-20T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          }
        ],
        "currentLesson": {
          "id": 140,
          "title": "Lesson 1: Introduction to Marketing",
          "description": "Fundamentals of marketing concepts.",
          "content": "This lesson introduces marketing and its significance in modern business. We discuss the four Ps of marketing: product, price, place, and promotion.",
          "course": {
            "id": 524,
            "title": "General Chemistry",
            "description": "Introduction to organic and inorganic chemistry.",
            "instructor": {
              "id": 103,
              "firstName": "Michael",
              "lastName": "Brown",
              "email": "michael.brown@university.com",
              "department": "Chemistry"
            },
            "enrollmentDeadline": "2025-01-25T23:59:59.000+00:00",
            "semester": "Spring 2025"
          },

        },
        "lastAccess": "2024-12-02T09:00:00.000+00:00",
        "overallProgress": 30.0
      }
    },
    {
      "id": 31,
      "student": {
        "id": 2117,
        "firstName": "Grace",
        "lastName": "Green",
        "email": "grace.green@example.com",
        "age": 22,
        "currentYear": 3
      },
      "course": {
        "id": 528,
        "title": "Philosophy 101 Test",
        "description": "Philosophical ideas and movements throughout history.",
        "instructor": {
          "id": 107,
          "firstName": "Lisa",
          "lastName": "Wilson",
          "email": "lisa.wilson@university.com",
          "department": "Philosophy"
        },
        "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
        "semester": "Spring 2025"
      },
      "enrollmentDate": "2024-01-30T00:00:00.000+00:00",
      "grade": 50.0,
      "completionStatus": true,
      "progress": {
        "id": 15,
        "completedLessons": [
          {
            "id": 140,
            "title": "Lesson 1: Introduction to Marketing",
            "description": "Fundamentals of marketing concepts.",
            "content": "This lesson introduces marketing and its significance in modern business. We discuss the four Ps of marketing: product, price, place, and promotion.",
            "course": {
              "id": 524,
              "title": "General Chemistry",
              "description": "Introduction to organic and inorganic chemistry.",
              "instructor": {
                "id": 103,
                "firstName": "Michael",
                "lastName": "Brown",
                "email": "michael.brown@university.com",
                "department": "Chemistry"
              },
              "enrollmentDeadline": "2025-01-25T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 142,
            "title": "Lesson 3: Consumer Behavior",
            "description": "Understanding consumer behavior.",
            "content": "Explore consumer behavior, including the factors that influence buying decisions and how marketers target specific consumer segments.",
            "course": {
              "id": 524,
              "title": "General Chemistry",
              "description": "Introduction to organic and inorganic chemistry.",
              "instructor": {
                "id": 103,
                "firstName": "Michael",
                "lastName": "Brown",
                "email": "michael.brown@university.com",
                "department": "Chemistry"
              },
              "enrollmentDeadline": "2025-01-25T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 144,
            "title": "Lesson 5: Pricing Strategies",
            "description": "Pricing strategies for products and services.",
            "content": "Learn about pricing strategies, including cost-based pricing, value-based pricing, and competitive pricing.",
            "course": {
              "id": 524,
              "title": "General Chemistry",
              "description": "Introduction to organic and inorganic chemistry.",
              "instructor": {
                "id": 103,
                "firstName": "Michael",
                "lastName": "Brown",
                "email": "michael.brown@university.com",
                "department": "Chemistry"
              },
              "enrollmentDeadline": "2025-01-25T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          }
        ],
        "currentLesson": {
          "id": 145,
          "title": "Lesson 6: Distribution Strategies",
          "description": "Distribution channels and strategies.",
          "content": "In this lesson, we dive into distribution strategies, including retail, wholesale, and direct-to-consumer models.",
          "course": {
            "id": 524,
            "title": "General Chemistry",
            "description": "Introduction to organic and inorganic chemistry.",
            "instructor": {
              "id": 103,
              "firstName": "Michael",
              "lastName": "Brown",
              "email": "michael.brown@university.com",
              "department": "Chemistry"
            },
            "enrollmentDeadline": "2025-01-25T23:59:59.000+00:00",
            "semester": "Spring 2025"
          },

        },
        "lastAccess": "2024-11-21T16:25:00.000+00:00",
        "overallProgress": 60.0
      }
    },
    {
      "id": 32,
      "student": {
        "id": 2118,
        "firstName": "Hannah",
        "lastName": "Harris",
        "email": "hannah.harris@example.com",
        "age": 23,
        "currentYear": 4
      },
      "course": {
        "id": 528,
        "title": "Philosophy 101 Test",
        "description": "Philosophical ideas and movements throughout history.",
        "instructor": {
          "id": 107,
          "firstName": "Lisa",
          "lastName": "Wilson",
          "email": "lisa.wilson@university.com",
          "department": "Philosophy"
        },
        "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
        "semester": "Spring 2025"
      },
      "enrollmentDate": "2024-04-12T00:00:00.000+00:00",
      "grade": 99.0,
      "completionStatus": true,
      "progress": {
        "id": 16,
        "completedLessons": [
          {
            "id": 146,
            "title": "Lesson 7: Promotional Strategies",
            "description": "Promotional strategies and techniques.",
            "content": "Explore various promotional strategies, including advertising, sales promotions, public relations, and digital marketing.",
            "course": {
              "id": 524,
              "title": "General Chemistry",
              "description": "Introduction to organic and inorganic chemistry.",
              "instructor": {
                "id": 103,
                "firstName": "Michael",
                "lastName": "Brown",
                "email": "michael.brown@university.com",
                "department": "Chemistry"
              },
              "enrollmentDeadline": "2025-01-25T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 148,
            "title": "Lesson 9: Brand Management",
            "description": "Brand management and development.",
            "content": "This lesson focuses on brand management and the importance of building and maintaining a strong brand identity in a competitive market.",
            "course": {
              "id": 524,
              "title": "General Chemistry",
              "description": "Introduction to organic and inorganic chemistry.",
              "instructor": {
                "id": 103,
                "firstName": "Michael",
                "lastName": "Brown",
                "email": "michael.brown@university.com",
                "department": "Chemistry"
              },
              "enrollmentDeadline": "2025-01-25T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 150,
            "title": "Lesson 1: Introduction to Data Analytics",
            "description": "Fundamentals of data analytics and its importance.",
            "content": "This lesson provides an overview of data analytics, its importance in decision-making, and the role it plays in various industries.",
            "course": {
              "id": 525,
              "title": "Fundamentals of Biology",
              "description": "Study of basic biological concepts, from cells to ecosystems.",
              "instructor": {
                "id": 104,
                "firstName": "Sarah",
                "lastName": "Davis",
                "email": "sarah.davis@university.com",
                "department": "Biology"
              },
              "enrollmentDeadline": "2025-01-30T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          }
        ],
        "currentLesson": {
          "id": 150,
          "title": "Lesson 1: Introduction to Data Analytics",
          "description": "Fundamentals of data analytics and its importance.",
          "content": "This lesson provides an overview of data analytics, its importance in decision-making, and the role it plays in various industries.",
          "course": {
            "id": 525,
            "title": "Fundamentals of Biology",
            "description": "Study of basic biological concepts, from cells to ecosystems.",
            "instructor": {
              "id": 104,
              "firstName": "Sarah",
              "lastName": "Davis",
              "email": "sarah.davis@university.com",
              "department": "Biology"
            },
            "enrollmentDeadline": "2025-01-30T23:59:59.000+00:00",
            "semester": "Spring 2025"
          },

        },
        "lastAccess": "2024-12-03T09:15:00.000+00:00",
        "overallProgress": 90.0
      }
    },
    {
      "id": 34,
      "student": {
        "id": 2120,
        "firstName": "Jack",
        "lastName": "Johnson",
        "email": "jack.johnson@example.com",
        "age": 20,
        "currentYear": 1
      },
      "course": {
        "id": 528,
        "title": "Philosophy 101 Test",
        "description": "Philosophical ideas and movements throughout history.",
        "instructor": {
          "id": 107,
          "firstName": "Lisa",
          "lastName": "Wilson",
          "email": "lisa.wilson@university.com",
          "department": "Philosophy"
        },
        "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
        "semester": "Spring 2025"
      },
      "enrollmentDate": "2024-04-01T00:00:00.000+00:00",
      "grade": 98.0,
      "completionStatus": true,
      "progress": {
        "id": 18,
        "completedLessons": [
          {
            "id": 158,
            "title": "Lesson 9: Business Applications of Data Analytics",
            "description": "Applications of data analytics in business.",
            "content": "This lesson covers the use of data analytics in business, including customer segmentation, sales forecasting, and market analysis.",
            "course": {
              "id": 525,
              "title": "Fundamentals of Biology",
              "description": "Study of basic biological concepts, from cells to ecosystems.",
              "instructor": {
                "id": 104,
                "firstName": "Sarah",
                "lastName": "Davis",
                "email": "sarah.davis@university.com",
                "department": "Biology"
              },
              "enrollmentDeadline": "2025-01-30T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 160,
            "title": "Lesson 1: Introduction to Digital Marketing",
            "description": "Overview of digital marketing fundamentals.",
            "content": "This lesson provides an introduction to digital marketing and explores the differences between traditional and digital marketing strategies.",
            "course": {
              "id": 526,
              "title": "Introduction to Engineering",
              "description": "An overview of engineering principles and practices.",
              "instructor": {
                "id": 105,
                "firstName": "Olivia",
                "lastName": "Martin",
                "email": "olivia.martin@university.com",
                "department": "Engineering"
              },
              "enrollmentDeadline": "2025-02-01T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 162,
            "title": "Lesson 3: Content Marketing",
            "description": "Content marketing strategies for business success.",
            "content": "This lesson covers content marketing, including how to create valuable, relevant, and consistent content to attract and retain customers.",
            "course": {
              "id": 526,
              "title": "Introduction to Engineering",
              "description": "An overview of engineering principles and practices.",
              "instructor": {
                "id": 105,
                "firstName": "Olivia",
                "lastName": "Martin",
                "email": "olivia.martin@university.com",
                "department": "Engineering"
              },
              "enrollmentDeadline": "2025-02-01T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          }
        ],
        "currentLesson": {
          "id": 160,
          "title": "Lesson 1: Introduction to Digital Marketing",
          "description": "Overview of digital marketing fundamentals.",
          "content": "This lesson provides an introduction to digital marketing and explores the differences between traditional and digital marketing strategies.",
          "course": {
            "id": 526,
            "title": "Introduction to Engineering",
            "description": "An overview of engineering principles and practices.",
            "instructor": {
              "id": 105,
              "firstName": "Olivia",
              "lastName": "Martin",
              "email": "olivia.martin@university.com",
              "department": "Engineering"
            },
            "enrollmentDeadline": "2025-02-01T23:59:59.000+00:00",
            "semester": "Spring 2025"
          },

        },
        "lastAccess": "2024-12-06T13:00:00.000+00:00",
        "overallProgress": 40.0
      }
    },
    {
      "id": 39,
      "student": {
        "id": 2125,
        "firstName": "Olivia",
        "lastName": "Connor",
        "email": "olivia.oconnor@example.com",
        "age": 22,
        "currentYear": 3
      },
      "course": {
        "id": 528,
        "title": "Philosophy 101 Test",
        "description": "Philosophical ideas and movements throughout history.",
        "instructor": {
          "id": 107,
          "firstName": "Lisa",
          "lastName": "Wilson",
          "email": "lisa.wilson@university.com",
          "department": "Philosophy"
        },
        "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
        "semester": "Spring 2025"
      },
      "enrollmentDate": "2024-03-15T00:00:00.000+00:00",
      "grade": 67.0,
      "completionStatus": true,
      "progress": {
        "id": 23,
        "completedLessons": [
          {
            "id": 187,
            "title": "Lesson 8: Financial Modeling",
            "description": "Financial modeling and projections.",
            "content": "Learn about financial modeling, including how to build models to predict the future financial performance of companies.",
            "course": {
              "id": 528,
              "title": "Philosophy 101 Test",
              "description": "Philosophical ideas and movements throughout history.",
              "instructor": {
                "id": 107,
                "firstName": "Lisa",
                "lastName": "Wilson",
                "email": "lisa.wilson@university.com",
                "department": "Philosophy"
              },
              "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 188,
            "title": "Lesson 9: Corporate Finance",
            "description": "Advanced corporate finance topics.",
            "content": "Explore advanced topics in corporate finance, including mergers and acquisitions (M&A), leveraged buyouts (LBO), and private equity.",
            "course": {
              "id": 528,
              "title": "Philosophy 101 Test",
              "description": "Philosophical ideas and movements throughout history.",
              "instructor": {
                "id": 107,
                "firstName": "Lisa",
                "lastName": "Wilson",
                "email": "lisa.wilson@university.com",
                "department": "Philosophy"
              },
              "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 189,
            "title": "Lesson 10: Financial Statement Analysis",
            "description": "Financial statement analysis and interpretation.",
            "content": "In this lesson, we focus on financial statement analysis techniques and how they can be used to assess a company’s financial position and performance.",
            "course": {
              "id": 528,
              "title": "Philosophy 101 Test",
              "description": "Philosophical ideas and movements throughout history.",
              "instructor": {
                "id": 107,
                "firstName": "Lisa",
                "lastName": "Wilson",
                "email": "lisa.wilson@university.com",
                "department": "Philosophy"
              },
              "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          }
        ],
        "currentLesson": {
          "id": 185,
          "title": "Lesson 6: Risk and Return",
          "description": "Risk and return in financial analysis.",
          "content": "Understand the concept of risk and return, and how to calculate the expected return and risk of investments.",
          "course": {
            "id": 528,
            "title": "Philosophy 101 Test",
            "description": "Philosophical ideas and movements throughout history.",
            "instructor": {
              "id": 107,
              "firstName": "Lisa",
              "lastName": "Wilson",
              "email": "lisa.wilson@university.com",
              "department": "Philosophy"
            },
            "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
            "semester": "Spring 2025"
          },

        },
        "lastAccess": "2024-12-11T19:10:00.000+00:00",
        "overallProgress": 70.0
      }
    },
    {
      "id": 40,
      "student": {
        "id": 2126,
        "firstName": "Paul",
        "lastName": "Parker",
        "email": "paul.parker@example.com",
        "age": 21,
        "currentYear": 2
      },
      "course": {
        "id": 528,
        "title": "Philosophy 101 Test",
        "description": "Philosophical ideas and movements throughout history.",
        "instructor": {
          "id": 107,
          "firstName": "Lisa",
          "lastName": "Wilson",
          "email": "lisa.wilson@university.com",
          "department": "Philosophy"
        },
        "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
        "semester": "Spring 2025"
      },
      "enrollmentDate": "2024-04-06T00:00:00.000+00:00",
      "grade": 77.0,
      "completionStatus": true,
      "progress": {
        "id": 24,
        "completedLessons": [],
        "currentLesson": {
          "id": 180,
          "title": "Lesson 1: Introduction to Financial Analysis",
          "description": "Fundamentals of financial analysis.",
          "content": "This lesson introduces financial analysis, including its role in evaluating the financial health of businesses and making investment decisions.",
          "course": {
            "id": 528,
            "title": "Philosophy 101 Test",
            "description": "Philosophical ideas and movements throughout history.",
            "instructor": {
              "id": 107,
              "firstName": "Lisa",
              "lastName": "Wilson",
              "email": "lisa.wilson@university.com",
              "department": "Philosophy"
            },
            "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
            "semester": "Spring 2025"
          },

        },
        "lastAccess": "2024-12-12T20:00:00.000+00:00",
        "overallProgress": 40.0
      }
    },
    {
      "id": 42,
      "student": {
        "id": 2128,
        "firstName": "Rachel",
        "lastName": "Robinson",
        "email": "rachel.robinson@example.com",
        "age": 22,
        "currentYear": 3
      },
      "course": {
        "id": 528,
        "title": "Philosophy 101 Test",
        "description": "Philosophical ideas and movements throughout history.",
        "instructor": {
          "id": 107,
          "firstName": "Lisa",
          "lastName": "Wilson",
          "email": "lisa.wilson@university.com",
          "department": "Philosophy"
        },
        "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
        "semester": "Spring 2025"
      },
      "enrollmentDate": "2024-03-30T00:00:00.000+00:00",
      "grade": 45.0,
      "completionStatus": true,
      "progress": {
        "id": 26,
        "completedLessons": [],
        "currentLesson": {
          "id": 170,
          "title": "Lesson 1: Overview of Advanced Web Development",
          "description": "Advanced web development techniques and tools.",
          "content": "This lesson provides an overview of advanced web development concepts, including modern web frameworks and full-stack development.",
          "course": {
            "id": 527,
            "title": "World History",
            "description": "Survey of historical events and their impact on modern society.",
            "instructor": {
              "id": 106,
              "firstName": "David",
              "lastName": "White",
              "email": "david.white@university.com",
              "department": "History"
            },
            "enrollmentDeadline": "2025-02-05T23:59:59.000+00:00",
            "semester": "Spring 2025"
          },

        },
        "lastAccess": "2024-12-14T13:20:00.000+00:00",
        "overallProgress": 80.0
      }
    },
    {
      "id": 27,
      "student": {
        "id": 2113,
        "firstName": "Charlie",
        "lastName": "Clark",
        "email": "charlie.clark@example.com",
        "age": 21,
        "currentYear": 2
      },
      "course": {
        "id": 528,
        "title": "Philosophy 101 Test",
        "description": "Philosophical ideas and movements throughout history.",
        "instructor": {
          "id": 107,
          "firstName": "Lisa",
          "lastName": "Wilson",
          "email": "lisa.wilson@university.com",
          "department": "Philosophy"
        },
        "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
        "semester": "Spring 2025"
      },
      "enrollmentDate": "2024-04-10T00:00:00.000+00:00",
      "grade": 0.0,
      "completionStatus": false,
      "progress": {
        "id": 11,
        "completedLessons": [
          {
            "id": 120,
            "title": "Lesson 1: Introduction to Data Science",
            "description": "Overview of data science and its applications.",
            "content": "This lesson introduces data science, its key components, and its applications in solving real-world problems.",
            "course": {
              "id": 522,
              "title": "Mathematics 101",
              "description": "Basic principles of algebra and geometry.",
              "instructor": {
                "id": 101,
                "firstName": "John",
                "lastName": "Smith",
                "email": "john.smith@university.com",
                "department": "Mathematics"
              },
              "enrollmentDeadline": "2025-01-15T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 121,
            "title": "Lesson 2: Data Collection and Cleaning",
            "description": "Data collection and cleaning techniques.",
            "content": "Learn how to collect and clean data using various methods, including web scraping and APIs.",
            "course": {
              "id": 522,
              "title": "Mathematics 101",
              "description": "Basic principles of algebra and geometry.",
              "instructor": {
                "id": 101,
                "firstName": "John",
                "lastName": "Smith",
                "email": "john.smith@university.com",
                "department": "Mathematics"
              },
              "enrollmentDeadline": "2025-01-15T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 123,
            "title": "Lesson 4: Probability and Statistics",
            "description": "Introduction to statistics and probability theory.",
            "content": "In this lesson, we focus on probability and statistics, key concepts in analyzing and interpreting data.",
            "course": {
              "id": 522,
              "title": "Mathematics 101",
              "description": "Basic principles of algebra and geometry.",
              "instructor": {
                "id": 101,
                "firstName": "John",
                "lastName": "Smith",
                "email": "john.smith@university.com",
                "department": "Mathematics"
              },
              "enrollmentDeadline": "2025-01-15T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          }
        ],
        "currentLesson": {
          "id": 120,
          "title": "Lesson 1: Introduction to Data Science",
          "description": "Overview of data science and its applications.",
          "content": "This lesson introduces data science, its key components, and its applications in solving real-world problems.",
          "course": {
            "id": 522,
            "title": "Mathematics 101",
            "description": "Basic principles of algebra and geometry.",
            "instructor": {
              "id": 101,
              "firstName": "John",
              "lastName": "Smith",
              "email": "john.smith@university.com",
              "department": "Mathematics"
            },
            "enrollmentDeadline": "2025-01-15T23:59:59.000+00:00",
            "semester": "Spring 2025"
          },

        },
        "lastAccess": "2024-12-05T12:00:00.000+00:00",
        "overallProgress": 60.0
      }
    },
    {
      "id": 33,
      "student": {
        "id": 2119,
        "firstName": "Isaac",
        "lastName": "Ivers",
        "email": "isaac.ivers@example.com",
        "age": 21,
        "currentYear": 2
      },
      "course": {
        "id": 528,
        "title": "Philosophy 101 Test",
        "description": "Philosophical ideas and movements throughout history.",
        "instructor": {
          "id": 107,
          "firstName": "Lisa",
          "lastName": "Wilson",
          "email": "lisa.wilson@university.com",
          "department": "Philosophy"
        },
        "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
        "semester": "Spring 2025"
      },
      "enrollmentDate": "2024-02-05T00:00:00.000+00:00",
      "grade": 0.0,
      "completionStatus": false,
      "progress": {
        "id": 17,
        "completedLessons": [
          {
            "id": 152,
            "title": "Lesson 3: Types of Data Analytics",
            "description": "Types of data analytics and their applications.",
            "content": "Explore various types of data analytics: descriptive, diagnostic, predictive, and prescriptive analytics.",
            "course": {
              "id": 525,
              "title": "Fundamentals of Biology",
              "description": "Study of basic biological concepts, from cells to ecosystems.",
              "instructor": {
                "id": 104,
                "firstName": "Sarah",
                "lastName": "Davis",
                "email": "sarah.davis@university.com",
                "department": "Biology"
              },
              "enrollmentDeadline": "2025-01-30T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 154,
            "title": "Lesson 5: Statistical Methods for Data Analytics",
            "description": "Statistical methods in data analytics.",
            "content": "Learn about statistical methods used in data analytics, such as hypothesis testing, regression analysis, and probability distributions.",
            "course": {
              "id": 525,
              "title": "Fundamentals of Biology",
              "description": "Study of basic biological concepts, from cells to ecosystems.",
              "instructor": {
                "id": 104,
                "firstName": "Sarah",
                "lastName": "Davis",
                "email": "sarah.davis@university.com",
                "department": "Biology"
              },
              "enrollmentDeadline": "2025-01-30T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 156,
            "title": "Lesson 7: Big Data Analytics",
            "description": "Introduction to big data analytics.",
            "content": "Learn about big data analytics and how large datasets are handled using tools like Hadoop and Spark.",
            "course": {
              "id": 525,
              "title": "Fundamentals of Biology",
              "description": "Study of basic biological concepts, from cells to ecosystems.",
              "instructor": {
                "id": 104,
                "firstName": "Sarah",
                "lastName": "Davis",
                "email": "sarah.davis@university.com",
                "department": "Biology"
              },
              "enrollmentDeadline": "2025-01-30T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          }
        ],
        "currentLesson": {
          "id": 155,
          "title": "Lesson 6: Predictive Analytics",
          "description": "Predictive analytics techniques and their use.",
          "content": "Explore predictive analytics and its use in forecasting trends and making predictions based on historical data.",
          "course": {
            "id": 525,
            "title": "Fundamentals of Biology",
            "description": "Study of basic biological concepts, from cells to ecosystems.",
            "instructor": {
              "id": 104,
              "firstName": "Sarah",
              "lastName": "Davis",
              "email": "sarah.davis@university.com",
              "department": "Biology"
            },
            "enrollmentDeadline": "2025-01-30T23:59:59.000+00:00",
            "semester": "Spring 2025"
          },

        },
        "lastAccess": "2024-12-04T10:30:00.000+00:00",
        "overallProgress": 70.0
      }
    },
    {
      "id": 35,
      "student": {
        "id": 2121,
        "firstName": "Katie",
        "lastName": "King",
        "email": "katie.king@example.com",
        "age": 22,
        "currentYear": 3
      },
      "course": {
        "id": 528,
        "title": "Philosophy 101 Test",
        "description": "Philosophical ideas and movements throughout history.",
        "instructor": {
          "id": 107,
          "firstName": "Lisa",
          "lastName": "Wilson",
          "email": "lisa.wilson@university.com",
          "department": "Philosophy"
        },
        "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
        "semester": "Spring 2025"
      },
      "enrollmentDate": "2024-03-28T00:00:00.000+00:00",
      "grade": 0.0,
      "completionStatus": false,
      "progress": {
        "id": 19,
        "completedLessons": [
          {
            "id": 164,
            "title": "Lesson 5: Email Marketing",
            "description": "Effective email marketing campaigns.",
            "content": "Learn about email marketing campaigns, how to build email lists, segment audiences, and create engaging email content.",
            "course": {
              "id": 526,
              "title": "Introduction to Engineering",
              "description": "An overview of engineering principles and practices.",
              "instructor": {
                "id": 105,
                "firstName": "Olivia",
                "lastName": "Martin",
                "email": "olivia.martin@university.com",
                "department": "Engineering"
              },
              "enrollmentDeadline": "2025-02-01T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 165,
            "title": "Lesson 6: Paid Advertising",
            "description": "Paid advertising methods and strategies.",
            "content": "This lesson focuses on paid advertising strategies, including pay-per-click (PPC) ads, display ads, and social media ads.",
            "course": {
              "id": 526,
              "title": "Introduction to Engineering",
              "description": "An overview of engineering principles and practices.",
              "instructor": {
                "id": 105,
                "firstName": "Olivia",
                "lastName": "Martin",
                "email": "olivia.martin@university.com",
                "department": "Engineering"
              },
              "enrollmentDeadline": "2025-02-01T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 167,
            "title": "Lesson 8: Affiliate Marketing",
            "description": "Affiliate marketing basics and strategies.",
            "content": "Explore affiliate marketing and how businesses can leverage affiliates to promote their products and services.",
            "course": {
              "id": 526,
              "title": "Introduction to Engineering",
              "description": "An overview of engineering principles and practices.",
              "instructor": {
                "id": 105,
                "firstName": "Olivia",
                "lastName": "Martin",
                "email": "olivia.martin@university.com",
                "department": "Engineering"
              },
              "enrollmentDeadline": "2025-02-01T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          }
        ],
        "currentLesson": {
          "id": 165,
          "title": "Lesson 6: Paid Advertising",
          "description": "Paid advertising methods and strategies.",
          "content": "This lesson focuses on paid advertising strategies, including pay-per-click (PPC) ads, display ads, and social media ads.",
          "course": {
            "id": 526,
            "title": "Introduction to Engineering",
            "description": "An overview of engineering principles and practices.",
            "instructor": {
              "id": 105,
              "firstName": "Olivia",
              "lastName": "Martin",
              "email": "olivia.martin@university.com",
              "department": "Engineering"
            },
            "enrollmentDeadline": "2025-02-01T23:59:59.000+00:00",
            "semester": "Spring 2025"
          },

        },
        "lastAccess": "2024-12-07T14:30:00.000+00:00",
        "overallProgress": 50.0
      }
    },
    {
      "id": 36,
      "student": {
        "id": 2122,
        "firstName": "Liam",
        "lastName": "Lewis",
        "email": "liam.lewis@example.com",
        "age": 21,
        "currentYear": 2
      },
      "course": {
        "id": 528,
        "title": "Philosophy 101 Test",
        "description": "Philosophical ideas and movements throughout history.",
        "instructor": {
          "id": 107,
          "firstName": "Lisa",
          "lastName": "Wilson",
          "email": "lisa.wilson@university.com",
          "department": "Philosophy"
        },
        "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
        "semester": "Spring 2025"
      },
      "enrollmentDate": "2024-02-22T00:00:00.000+00:00",
      "grade": 0.0,
      "completionStatus": false,
      "progress": {
        "id": 20,
        "completedLessons": [
          {
            "id": 170,
            "title": "Lesson 1: Overview of Advanced Web Development",
            "description": "Advanced web development techniques and tools.",
            "content": "This lesson provides an overview of advanced web development concepts, including modern web frameworks and full-stack development.",
            "course": {
              "id": 527,
              "title": "World History",
              "description": "Survey of historical events and their impact on modern society.",
              "instructor": {
                "id": 106,
                "firstName": "David",
                "lastName": "White",
                "email": "david.white@university.com",
                "department": "History"
              },
              "enrollmentDeadline": "2025-02-05T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 172,
            "title": "Lesson 3: Building APIs with Express.js",
            "description": "Building backend APIs with Express.js.",
            "content": "Explore backend development with Express.js, focusing on building RESTful APIs and connecting them to a front-end client.",
            "course": {
              "id": 527,
              "title": "World History",
              "description": "Survey of historical events and their impact on modern society.",
              "instructor": {
                "id": 106,
                "firstName": "David",
                "lastName": "White",
                "email": "david.white@university.com",
                "department": "History"
              },
              "enrollmentDeadline": "2025-02-05T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 174,
            "title": "Lesson 5: Databases in Web Development",
            "description": "Using MongoDB with Node.js.",
            "content": "Learn about databases in web development, including using MongoDB with Node.js for NoSQL storage and how to manage data efficiently.",
            "course": {
              "id": 527,
              "title": "World History",
              "description": "Survey of historical events and their impact on modern society.",
              "instructor": {
                "id": 106,
                "firstName": "David",
                "lastName": "White",
                "email": "david.white@university.com",
                "department": "History"
              },
              "enrollmentDeadline": "2025-02-05T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          }
        ],
        "currentLesson": {
          "id": 170,
          "title": "Lesson 1: Overview of Advanced Web Development",
          "description": "Advanced web development techniques and tools.",
          "content": "This lesson provides an overview of advanced web development concepts, including modern web frameworks and full-stack development.",
          "course": {
            "id": 527,
            "title": "World History",
            "description": "Survey of historical events and their impact on modern society.",
            "instructor": {
              "id": 106,
              "firstName": "David",
              "lastName": "White",
              "email": "david.white@university.com",
              "department": "History"
            },
            "enrollmentDeadline": "2025-02-05T23:59:59.000+00:00",
            "semester": "Spring 2025"
          },

        },
        "lastAccess": "2024-12-08T15:15:00.000+00:00",
        "overallProgress": 60.0
      }
    },
    {
      "id": 37,
      "student": {
        "id": 2123,
        "firstName": "Megan",
        "lastName": "Mitchell",
        "email": "megan.mitchell@example.com",
        "age": 23,
        "currentYear": 4
      },
      "course": {
        "id": 528,
        "title": "Philosophy 101 Test",
        "description": "Philosophical ideas and movements throughout history.",
        "instructor": {
          "id": 107,
          "firstName": "Lisa",
          "lastName": "Wilson",
          "email": "lisa.wilson@university.com",
          "department": "Philosophy"
        },
        "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
        "semester": "Spring 2025"
      },
      "enrollmentDate": "2024-04-03T00:00:00.000+00:00",
      "grade": 0.0,
      "completionStatus": false,
      "progress": {
        "id": 21,
        "completedLessons": [
          {
            "id": 176,
            "title": "Lesson 7: Introduction to GraphQL",
            "description": "Introduction to GraphQL.",
            "content": "This lesson introduces GraphQL, an alternative to REST for querying APIs, and how to use it in modern web development.",
            "course": {
              "id": 527,
              "title": "World History",
              "description": "Survey of historical events and their impact on modern society.",
              "instructor": {
                "id": 106,
                "firstName": "David",
                "lastName": "White",
                "email": "david.white@university.com",
                "department": "History"
              },
              "enrollmentDeadline": "2025-02-05T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 178,
            "title": "Lesson 9: DevOps and Deployment",
            "description": "Deploying web apps with DevOps practices.",
            "content": "Understand the concepts of DevOps and how to deploy web applications using containerization tools like Docker and orchestration tools like Kubernetes.",
            "course": {
              "id": 527,
              "title": "World History",
              "description": "Survey of historical events and their impact on modern society.",
              "instructor": {
                "id": 106,
                "firstName": "David",
                "lastName": "White",
                "email": "david.white@university.com",
                "department": "History"
              },
              "enrollmentDeadline": "2025-02-05T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 180,
            "title": "Lesson 1: Introduction to Financial Analysis",
            "description": "Fundamentals of financial analysis.",
            "content": "This lesson introduces financial analysis, including its role in evaluating the financial health of businesses and making investment decisions.",
            "course": {
              "id": 528,
              "title": "Philosophy 101 Test",
              "description": "Philosophical ideas and movements throughout history.",
              "instructor": {
                "id": 107,
                "firstName": "Lisa",
                "lastName": "Wilson",
                "email": "lisa.wilson@university.com",
                "department": "Philosophy"
              },
              "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          }
        ],
        "currentLesson": {
          "id": 175,
          "title": "Lesson 6: Asynchronous JavaScript",
          "description": "Asynchronous programming in JavaScript.",
          "content": "Explore advanced JavaScript concepts like asynchronous programming, promises, and async/await for handling asynchronous operations in web apps.",
          "course": {
            "id": 527,
            "title": "World History",
            "description": "Survey of historical events and their impact on modern society.",
            "instructor": {
              "id": 106,
              "firstName": "David",
              "lastName": "White",
              "email": "david.white@university.com",
              "department": "History"
            },
            "enrollmentDeadline": "2025-02-05T23:59:59.000+00:00",
            "semester": "Spring 2025"
          },

        },
        "lastAccess": "2024-12-09T16:40:00.000+00:00",
        "overallProgress": 30.0
      }
    },
    {
      "id": 38,
      "student": {
        "id": 2124,
        "firstName": "Noah",
        "lastName": "Nelson",
        "email": "noah.nelson@example.com",
        "age": 20,
        "currentYear": 1
      },
      "course": {
        "id": 528,
        "title": "Philosophy 101 Test",
        "description": "Philosophical ideas and movements throughout history.",
        "instructor": {
          "id": 107,
          "firstName": "Lisa",
          "lastName": "Wilson",
          "email": "lisa.wilson@university.com",
          "department": "Philosophy"
        },
        "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
        "semester": "Spring 2025"
      },
      "enrollmentDate": "2024-01-10T00:00:00.000+00:00",
      "grade": 0.0,
      "completionStatus": false,
      "progress": {
        "id": 22,
        "completedLessons": [
          {
            "id": 182,
            "title": "Lesson 3: Financial Ratios and Metrics",
            "description": "Financial ratios and their significance.",
            "content": "This lesson covers financial ratios and metrics, such as liquidity ratios, profitability ratios, and leverage ratios, used to analyze a company’s performance.",
            "course": {
              "id": 528,
              "title": "Philosophy 101 Test",
              "description": "Philosophical ideas and movements throughout history.",
              "instructor": {
                "id": 107,
                "firstName": "Lisa",
                "lastName": "Wilson",
                "email": "lisa.wilson@university.com",
                "department": "Philosophy"
              },
              "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 184,
            "title": "Lesson 5: Financial Valuation Methods",
            "description": "Valuation techniques for financial analysis.",
            "content": "Explore valuation methods used in financial analysis, including discounted cash flow (DCF) analysis, market multiples, and precedent transactions.",
            "course": {
              "id": 528,
              "title": "Philosophy 101 Test",
              "description": "Philosophical ideas and movements throughout history.",
              "instructor": {
                "id": 107,
                "firstName": "Lisa",
                "lastName": "Wilson",
                "email": "lisa.wilson@university.com",
                "department": "Philosophy"
              },
              "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          },
          {
            "id": 186,
            "title": "Lesson 7: Capital Budgeting",
            "description": "Capital budgeting techniques.",
            "content": "This lesson introduces capital budgeting techniques, including net present value (NPV), internal rate of return (IRR), and payback period.",
            "course": {
              "id": 528,
              "title": "Philosophy 101 Test",
              "description": "Philosophical ideas and movements throughout history.",
              "instructor": {
                "id": 107,
                "firstName": "Lisa",
                "lastName": "Wilson",
                "email": "lisa.wilson@university.com",
                "department": "Philosophy"
              },
              "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
              "semester": "Spring 2025"
            },

          }
        ],
        "currentLesson": {
          "id": 180,
          "title": "Lesson 1: Introduction to Financial Analysis",
          "description": "Fundamentals of financial analysis.",
          "content": "This lesson introduces financial analysis, including its role in evaluating the financial health of businesses and making investment decisions.",
          "course": {
            "id": 528,
            "title": "Philosophy 101 Test",
            "description": "Philosophical ideas and movements throughout history.",
            "instructor": {
              "id": 107,
              "firstName": "Lisa",
              "lastName": "Wilson",
              "email": "lisa.wilson@university.com",
              "department": "Philosophy"
            },
            "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
            "semester": "Spring 2025"
          },

        },
        "lastAccess": "2024-12-10T17:25:00.000+00:00",
        "overallProgress": 20.0
      }
    },
    {
      "id": 41,
      "student": {
        "id": 2127,
        "firstName": "Quinn",
        "lastName": "Quinn",
        "email": "quinn.quinn@example.com",
        "age": 23,
        "currentYear": 4
      },
      "course": {
        "id": 528,
        "title": "Philosophy 101 Test",
        "description": "Philosophical ideas and movements throughout history.",
        "instructor": {
          "id": 107,
          "firstName": "Lisa",
          "lastName": "Wilson",
          "email": "lisa.wilson@university.com",
          "department": "Philosophy"
        },
        "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
        "semester": "Spring 2025"
      },
      "enrollmentDate": "2024-02-12T00:00:00.000+00:00",
      "grade": 0.0,
      "completionStatus": false,
      "progress": {
        "id": 25,
        "completedLessons": [],
        "currentLesson": {
          "id": 185,
          "title": "Lesson 6: Risk and Return",
          "description": "Risk and return in financial analysis.",
          "content": "Understand the concept of risk and return, and how to calculate the expected return and risk of investments.",
          "course": {
            "id": 528,
            "title": "Philosophy 101 Test",
            "description": "Philosophical ideas and movements throughout history.",
            "instructor": {
              "id": 107,
              "firstName": "Lisa",
              "lastName": "Wilson",
              "email": "lisa.wilson@university.com",
              "department": "Philosophy"
            },
            "enrollmentDeadline": "2025-02-10T23:59:59.000+00:00",
            "semester": "Spring 2025"
          },

        },
        "lastAccess": "2024-12-13T14:45:00.000+00:00",
        "overallProgress": 90.0
      }
    }
  ];

  filteredEnrollments: Enrollment[] = [...this.enrollments];
  paginatedEnrollments: Enrollment[] = [];
  pageSize = 2;
  pageIndex = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.updatePaginatedEnrollments();
  }

  updatePaginatedEnrollments() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedEnrollments = this.filteredEnrollments.slice(startIndex, endIndex);
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedEnrollments();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredEnrollments = this.enrollments.filter(enrollment =>
      enrollment?.student?.firstName.toLowerCase().includes(filterValue) ||
      enrollment?.student?.lastName.toLowerCase().includes(filterValue)
    );

    this.pageIndex = 0; // Reset to the first page
    this.updatePaginatedEnrollments();
  }

  onDelete($event: number) {

  }
}

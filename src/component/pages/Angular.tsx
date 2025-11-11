import { useState } from "react";

const Angular = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const topics = [
    { id: "intro", label: "Introduction", icon: "🚀" },
    { id: "components", label: "Components", icon: "🧩" },
    { id: "directives", label: "Directives", icon: "📝" },
    { id: "services", label: "Services & DI", icon: "🔧" },
    { id: "routing", label: "Routing", icon: "🛣️" },
    { id: "rxjs", label: "RxJS", icon: "🔄" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "intro":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Introduction to Angular
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Angular is a platform and framework for building single-page client
              applications using HTML and TypeScript. Developed and maintained by
              Google, it provides a complete solution for enterprise applications.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Key Features
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Component-based architecture</li>
                <li>TypeScript by default</li>
                <li>Powerful CLI for scaffolding and development</li>
                <li>Two-way data binding</li>
                <li>Dependency Injection</li>
                <li>RxJS for reactive programming</li>
                <li>Complete framework with routing, HTTP, forms</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Creating Your First Angular App
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Install Angular CLI
npm install -g @angular/cli

// Create new project
ng new my-app

// Serve the application
cd my-app
ng serve

// Generate components
ng generate component user-profile
ng generate service data`}
              </pre>
            </div>
          </div>
        );

      case "components":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Angular Components
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Components are the building blocks of Angular applications. Each
              component consists of a TypeScript class, HTML template, and CSS styles.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Component Structure
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// user.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name: string = 'John Doe';
  age: number = 25;
  isActive: boolean = true;

  greet(): void {
    alert(\`Hello, \${this.name}!\`);
  }
}

// user.component.html
<div class="user-card">
  <h2>{{ name }}</h2>
  <p>Age: {{ age }}</p>
  <p *ngIf="isActive">Status: Active</p>
  <button (click)="greet()">Greet</button>
</div>`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Input and Output
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// child.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: \`
    <div>
      <h3>{{ title }}</h3>
      <button (click)="sendMessage()">Send Message</button>
    </div>
  \`
})
export class ChildComponent {
  @Input() title: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(): void {
    this.messageEvent.emit('Hello from child!');
  }
}

// parent.component.ts
@Component({
  selector: 'app-parent',
  template: \`
    <app-child
      [title]="parentTitle"
      (messageEvent)="receiveMessage($event)">
    </app-child>
  \`
})
export class ParentComponent {
  parentTitle = 'Child Component';

  receiveMessage(message: string): void {
    console.log(message);
  }
}`}
              </pre>
            </div>
          </div>
        );

      case "directives":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Angular Directives
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Directives are classes that add behavior to elements in your Angular
              applications. Angular has three types: Component, Attribute, and
              Structural directives.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Structural Directives
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// *ngIf - Conditional rendering
<div *ngIf="isLoggedIn">Welcome back!</div>
<div *ngIf="isLoggedIn; else loginBlock">Welcome!</div>
<ng-template #loginBlock>
  <div>Please login</div>
</ng-template>

// *ngFor - Loop through items
<ul>
  <li *ngFor="let item of items; let i = index">
    {{ i + 1 }}. {{ item.name }}
  </li>
</ul>

// *ngSwitch - Multiple conditions
<div [ngSwitch]="userRole">
  <p *ngSwitchCase="'admin'">Admin Dashboard</p>
  <p *ngSwitchCase="'user'">User Dashboard</p>
  <p *ngSwitchDefault>Guest View</p>
</div>`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Attribute Directives
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// ngClass - Dynamic classes
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">
  Content
</div>

// ngStyle - Dynamic styles
<div [ngStyle]="{'color': textColor, 'font-size': fontSize + 'px'}">
  Styled text
</div>

// Custom attribute directive
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}

// Usage: <p appHighlight>Hover me!</p>`}
              </pre>
            </div>
          </div>
        );

      case "services":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Services & Dependency Injection
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Services are used to share data and logic across components. Angular's
              Dependency Injection system makes it easy to inject services into
              components.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Creating a Service
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Available app-wide
})
export class DataService {
  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(\`\${this.apiUrl}/users\`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(\`\${this.apiUrl}/users/\${id}\`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(\`\${this.apiUrl}/users\`, user);
  }
}`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Using Services in Components
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// user.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  users: any[] = [];
  loading = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error:', error);
        this.loading = false;
      }
    });
  }
}`}
              </pre>
            </div>
          </div>
        );

      case "routing":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Angular Routing
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Angular Router enables navigation between different views in your
              application.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Setting Up Routes
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '**', redirectTo: '' }  // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// app.component.html
<nav>
  <a routerLink="/" routerLinkActive="active">Home</a>
  <a routerLink="/about" routerLinkActive="active">About</a>
</nav>
<router-outlet></router-outlet>`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Programmatic Navigation
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { Router, ActivatedRoute } from '@angular/router';

export class MyComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  navigateToUser(id: number): void {
    this.router.navigate(['/user', id]);
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  // Get route parameters
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log('User ID:', id);
    });
  }
}`}
              </pre>
            </div>
          </div>
        );

      case "rxjs":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              RxJS in Angular
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              RxJS (Reactive Extensions for JavaScript) is a library for composing
              asynchronous and event-based programs using observable sequences.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Observables
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { Observable, of, from } from 'rxjs';

// Create observable from values
const numbers$ = of(1, 2, 3, 4, 5);

// Create observable from array
const fruits$ = from(['apple', 'banana', 'orange']);

// Subscribe to observable
numbers$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.error(err),
  complete: () => console.log('Complete!')
});

// Unsubscribe to prevent memory leaks
const subscription = numbers$.subscribe(console.log);
subscription.unsubscribe();`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Common Operators
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { map, filter, debounceTime, switchMap } from 'rxjs/operators';

// Map - transform values
numbers$.pipe(
  map(x => x * 2)
).subscribe(console.log);

// Filter - filter values
numbers$.pipe(
  filter(x => x % 2 === 0)
).subscribe(console.log);

// debounceTime - wait for pause in events
searchInput$.pipe(
  debounceTime(300),
  switchMap(term => this.searchService.search(term))
).subscribe(results => this.results = results);

// Combining operators
this.http.get('/api/users').pipe(
  map(response => response.data),
  filter(users => users.length > 0),
  tap(users => console.log('Users:', users))
).subscribe(users => this.users = users);`}
              </pre>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Angular Course</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Master Angular and build powerful, scalable enterprise applications
              with Google's complete framework.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Topic Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTab(topic.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  activeTab === topic.id
                    ? "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="text-2xl">{topic.icon}</span>
                <span>{topic.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Angular;
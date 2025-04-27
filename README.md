# task-dashboard
This project is a Task Management Dashboard built using Angular 19, Angular Material UI, and a drag-and-drop library for task movement between columns. The dashboard allows users to view tasks in a Kanban-style board with columns for To Do, In Progress, and Done. Users can also add new tasks, and move them between these statuses, with the changes being persisted through API calls to a mock REST API.
# What Went Well:
# Task Display: 
Tasks are successfully fetched and displayed in their respective columns based on their statuses, ensuring a functional Kanban layout.

# Task Creation: 
The form/modal for adding new tasks works well, and tasks are immediately updated on the UI after creation.

#Drag-and-Drop: 
The drag-and-drop functionality using Angular’s cdkDrag and cdkDrop works smoothly, allowing users to easily move tasks between columns, with real-time updates.

# Challenges:
# Error Handling: 
Initially, error handling for API calls wasn’t robust, but was improved with more feedback to the user.

# State Management: 
Managing tasks' states after drag-and-drop actions required careful synchronization between the UI and backend, especially in keeping the UI updated when the backend state changes.

# API Integration: 
Integrating the API and ensuring tasks are updated on the server after drag-and-drop actions added some complexity.

# Technology Rating (Out of 10)
# Angular (8/10): 
Angular provides a powerful framework for building scalable applications, and I am comfortable with the features I used in this project (standalone components, Angular Material, etc.). However, there were some complexities in integrating and managing state with drag-and-drop functionality.

# Material UI (9/10): 
Angular Material made it easy to implement visually appealing components like buttons, modals, and snackbars. It could be improved with more customizations to match the project's specific needs.

# Drag-and-Drop Library (8/10): 
The drag-and-drop library worked well, but it took some effort to ensure the UI and backend remained in sync after task movements.

# API Integration (7/10): 
I used JSON Server as a mock backend, which was helpful for testing, but integrating real API services and handling more complex state changes could be improved.

# Instructions to Run the Project Locally
# Clone the repository: git clone https://github.com/Gowsitg/task-dashboard.git   (master branch)
# Navigate to the project directory: cd task-management-dashboard
# Install dependencies: npm install
# Run the project: ng serve
# Run JSON Server: json-server --watch db.json --port 3000




# DevStack

<p>DevStack is a web application where developers can explore different technologies. Users can select technologies and build their own personalized stack</p>

---

## Technologies Used

- React
- Daisy Ui
- React Icon
- React Toastify
- Tailwind Css

---

## Features about this project

- Users can easily add technologies to their stack.
- Once a technology is selected, its button becomes disabled with a different color and border.
- If users try to add the same technology again, a waring message will show to the UI.
- Users can remove individual technologies or clear the entire stack at any time.

---

## Question And Answer

### 1. What is JSX, and why is it used in React?

**Answer:** JSX means JavaScriptXML. It is a syntax that allows us to write HTML-like code inside JavaScript. It makes creating React UI easier and more readable. Thats why React Used JSX.

### 2. What is the difference between props and state?

**Answer:** We can pass data from the parent component to the child component as props and read it, and state means the component's value. Its data can be changed.

### 3. What does the useState hook do, and where did you use it in this project?

**Answer:** Ths useState is a React hook. Its used to store and manage changing data inside a React Component. In this project, I used useState to manage the selected technologies in the user's stack and when the user adds or removes a technology, the state updates and the UI changes automatically.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

**Answer:** The useEffect hook is used to perform side effects in a React component. I used useEffect in my privious project to fetch the JSON data when the component loaded. After fetching the data, I updated the state with the fetched datas.

### 5. Why does every item in a .map() list need a unique key prop?

**Answer:** When I use .map() in lists content to render its need key because React can identify each item by its unique key and effeciently update the UI when the list changes..

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

**Answer:** Conditional rendering means showing different UI based on condition. I Used it to show an empty stack message when no technology is selected.

```tsx
{
  selected.length ? (
    <div className="grid grid-cols-1 gap-3">
      {selected.map((tech) => (
        <SingleSelectedTechnology
          handleDeleteTechnology={handleDeleteTechnology}
          key={tech.id}
          technology={tech}
        />
      ))}
      <button
        onClick={handleRemoveAll}
        className="text-red-700 py-2 mt-7 rounded-xl font-bold text-center w-full border-2 border-red-300 cursor-pointer hover:bg-red-700 hover:text-white duration-500 transition hover:border-red-700"
      >
        Remove All
      </button>
    </div>
  ) : (
    <div className="border-2 border-dashed border-gray-200 rounded-xl text-center py-6 text-[#94A3B8]">
      <h3>Your stack is empty.</h3>
    </div>
  );
}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:** I pass data from a parent component to a child component using props. To send something from the child component to the parent component, I pass a function from the parent component to the child component as a prop, and the child component calls the function to send data back to the parent component.

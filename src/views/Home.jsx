import React from 'react';
import { useSelector } from 'react-redux';
import CompletedTodoList from '../components/completedTodos/CompletedTodoList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import TodoList from '../components/TodoList';

function Home() {
    const todos = useSelector((state) => state.todos);
    const completedTodos = todos.filter((todo) => todo.completed);

    return (
        <section className="all-todo-box-container flex flex-col lg:flex-row justify-center items-center bg-blue-100 h-full lg:h-screen">
            {/* functional todo box */}
            <div className="px-6 font-sans my-20 lg:my-0">
                <Navbar />
                <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white mt-12">
                    <Header />
                    <hr className="mt-4" />
                    <TodoList />
                    <hr className="mt-4" />
                    <Footer />
                </div>
            </div>

            {/* only completed todo box */}
            <div className="px-6 font-sans lg:w-96 mb-12 lg:mt-0 lg:mb-0">
                <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white mt-6">
                    <h1 className="text-md font-semibold underline text-center">{`Completed Todos (${completedTodos.length})`}</h1>
                    <CompletedTodoList />
                </div>
            </div>
        </section>
    );
}

export default Home;

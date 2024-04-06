import './Main.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import NewsPage from "./NewsPage/NewsPage";
import ContactsPage from "./ContactsPage/ContactsPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

export default function Main(){
    return(
        <main className="main">
            <section className='section'/>
            <article className='article'>
                <Routes>
                    <Route path="/Lab15/" element={<HomePage />} />
                    <Route path="/Lab15/about" element={<AboutPage />} />
                    <Route path='/Lab15/news' element={<NewsPage />} />
                    <Route path='/Lab15/contacts' element={<ContactsPage />}/>
                    <Route path="Lab15/*" element={<NotFoundPage />} />
                </Routes>
            </article>
            <aside className='aside'>
                <p className='aside__text'>Лазарева Анна Анатольевна</p>
            </aside>
        </main>
    )
}
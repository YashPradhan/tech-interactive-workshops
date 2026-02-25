"use client"
import styles from "./page.module.scss";
import Cookie from "./Cookie";
// Remember to import useState from "react"
import React, { useState } from 'react'

export default function CookieClicker() {
  // TODO: replace "counter" with a state variable called 'counter' with a proper setter and initial value
  // CODE HERE //



  // TODO: (Optional) create a function called 'incrementCounter' that increases the counter by 1
  // CODE HERE //
  
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>🍪 Simple Cookie Clicker 🍪</h1>
      
      //<h2 className={styles.counter}>Counter: {click}</h2>

      {/* Increment the counter when you click the cookie */}
      <Cookie onClick={counter}/>

    </div>
  );
}
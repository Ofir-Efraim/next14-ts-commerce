import React from "react";
import styles from "./styles.module.css";
import { nutritionalValues } from "@/app/types";
type labelProps = {
  nutritionalValues: nutritionalValues;
};
export default function Label({ nutritionalValues }: labelProps) {
  return (
    <section className={styles.nutrition}>
      <header>
        <h1 className={styles.title}>ערכים תזונתיים</h1>
        <div>{`ערכים תזונתיים ל${nutritionalValues.servingSize} גרם`}</div>
      </header>
      <ul className={styles.facts}>
        <li className={styles.note}>
          <span>{`כמות ל${nutritionalValues.servingSize} גרם`}</span>
        </li>
        <li>
          <span>
            <span className={styles.factsLabel}>קלוריות </span>
            {nutritionalValues.calories}
          </span>
          <ul>
            <li>קלוריות משומן {nutritionalValues.caloriesFromFat}</li>
          </ul>
        </li>
        <li className={styles.factsSection}>
          <span>
            <span className={styles.factsLabel}>סך השומנים </span>
            {nutritionalValues.fats} גרם
          </span>

          <ul>
            <li>
              <span>שומן רווי {nutritionalValues.saturatedFat} גרם</span>
            </li>
            <li>שומן טראנס {nutritionalValues.transFat} גרם</li>
          </ul>
        </li>
        <li>
          <span>
            <span className={styles.factsLabel}>כולסטרול</span>{" "}
            {nutritionalValues.cholesterol} מיליגרם
          </span>
        </li>
        <li>
          <span>
            <span className={styles.factsLabel}>נתרן</span>{" "}
            {nutritionalValues.sodium} מיליגרם
          </span>
        </li>
        <li>
          <span>
            <span className={styles.factsLabel}>פחמימות</span>{" "}
            {nutritionalValues.carbs} גרם
          </span>

          <ul>
            <li>
              <span>סיבים תזונתיים {nutritionalValues.fiber} גרם</span>
            </li>
            <li>מתוכם סוכרים {nutritionalValues.sugars} גרם</li>
          </ul>
        </li>
        <li>
          <span>
            <span className={styles.factsLabel}>חלבונים</span>{" "}
            {nutritionalValues.protein} גרם
          </span>
        </li>
      </ul>
      <div className={styles.ingredients}>
        <span className={styles.factsLabel}>רכיבים : </span>
        {nutritionalValues.ingredients.map((ingredient, index) => (
          <span key={ingredient} className={styles.ingredient}>
            {ingredient}
            {index !== nutritionalValues.ingredients.length - 1 ? "," : "."}
          </span>
        ))}
      </div>
    </section>
  );
}

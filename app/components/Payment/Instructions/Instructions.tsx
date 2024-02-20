import React from "react";
import styles from "./styles.module.css";
export default function Instructions() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>הנחיות לאחסנה ושימוש</p>
        <p>
          מכיוון שהמוצרים שלנו ללא חומרים משמרים או מייצבים ומחומרים טיבעיים
          בלבד יש הנחיות שחשוב להעביר ללקוחות ברכישה הראשונית.
        </p>
        <p>לתשומת ליבך 😍</p>
        <p>העוגות טריות נא לשמור במקרר.</p>
        <p>
          לחמים לשמור במקפיא - לשימוש לשים בטוסטר קופץ / תנור על חום גבוה
          (הקרספיות מקפיצה טעמים חבל על הזמן).
        </p>
        <p>
          תחתיות פיצה לשמור במקפיא - לשימוש למרוח רטבים וגבינות טבעוניות / או כל
          דבר אחר שחשקה נפשכם מעל. לשים בתנור ב 200 מעולות ל 15-17 דקות.
        </p>
        <p>ממרחים - לשמור בקרור.</p>
        <p>לבריאות🥬</p>
        <p>{'"צחם" לחמי בריאות מזרעי צמחים 😍'}</p>
      </div>
    </div>
  );
}

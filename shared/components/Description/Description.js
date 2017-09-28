import React from "react";

const styles = {
  block: {
    marginBottom: 20,
    display: "block"
  }
}

export default () => (
  <aside className="info fixed">
    <div className="info-inner">
      <h2 style={styles.block}>

        Photo BEFORE

      </h2>
      <p>
        Вот это мои зубы ДО
      </p>

      <span className="date">
        5 дней назад
      </span>

      <p>Здесь должен быть какой-то текст... ывалфдывафыва фываф ыва фыв афыв а</p>
    </div>
  </aside>
)

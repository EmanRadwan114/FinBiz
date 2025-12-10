import React from "react";
import styles from "./style.module.scss";
import AnalysisCard from "../ui/analysis-card/AnalysisCard";
import invoiceImg from "@/assets/invoice.svg";

const invoiceData = [
  "John Client_download.Pdf",
  "Michele Leos_download.Pdf",
  "John Smith_download.Pdf",
];

const ForthCard: React.FC = () => {
  return (
    <AnalysisCard
      title="Real-time accounting at your fingertips."
      textContent="Take the pain out of book keeping! Wave goodbye to mountains of paperwork and endless email reminders. There\`s now a new way of accounting."
      textAlign="start"
    >
      <div className={styles["invoice-box"]}>
        <div className={styles.total}>
          <span>$3453.00</span>
          <div className={styles.placeholder}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles["invoice-info"]}>
          <h3 className={styles["invoice-title"]}>MonthlyInvoice</h3>
          <div className={styles.invoices}>
            {invoiceData.map((item, indx) => (
              <div className={styles["invoice-item"]} key={indx}>
                <div className={styles["invoice-icon"]}>
                  <img src={invoiceImg} alt="invoice icon" />
                </div>
                <div className={styles["item-info"]}>
                  <span>{item}</span>
                  <div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnalysisCard>
  );
};

export default ForthCard;

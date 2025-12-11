import React from "react";
import styles from "./style.module.scss";
import AnalysisCard from "../ui/analysis-card/AnalysisCard";
import invoiceImg from "@/assets/invoice.svg";
import { useTranslation } from "react-i18next";
import { BiDotsVerticalRounded } from "react-icons/bi";

const invoiceData = [
  "John Client_download.Pdf",
  "Michele Leos_download.Pdf",
  "John Smith_download.Pdf",
];

const ForthCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AnalysisCard
      // Key: accounting.title
      title={t("accounting.title")}
      // Key: accounting.description
      textContent={t("accounting.description")}
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
          <h3 className={styles["invoice-title"]}>
            {/* Key: invoices.monthly_invoice */}
            {t("invoices.monthly_invoice")}
          </h3>
          <div className={styles.invoices}>
            {invoiceData.map((item, indx) => (
              <div className={styles["invoice-item"]} key={indx}>
                <div className={styles["invoice-icon"]}>
                  <img src={invoiceImg} alt={t("common.invoice_icon")} />
                </div>
                <div className={styles["item-info"]}>
                  <div className={styles.header}>
                    <span>{item}</span>
                    <BiDotsVerticalRounded className={styles.dots} />
                  </div>
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

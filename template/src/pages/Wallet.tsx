import React from "react";

// Define the transaction type
interface Transaction {
  date: string;
  description: string;
  amount: number;
}

// Define the props type for Wallet
interface WalletProps {
  balance?: number;
  transactions?: Transaction[];
}

const Wallet: React.FC<WalletProps> = ({
  balance = 0,
  transactions = [],
}) => {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        fontFamily: "Inter, sans-serif",
        color: "#111827",
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      {/* --- Back Button Added --- */}
      <button
        onClick={() => window.history.back()}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1rem",
          color: "#4F46E5",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          marginBottom: "1rem",
          padding: 0,
        }}
      >
        <span style={{ marginRight: "0.25rem", fontSize: "1.25rem" }}>
          &larr;
        </span>
        Back
      </button>

      {/* Wallet Header */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            marginBottom: "0.25rem",
          }}
        >
          My Wallet
        </h1>
        <p style={{ color: "#6b7280", marginBottom: "0.75rem" }}>
          Current Balance
        </p>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            marginBottom: "1.5rem",
          }}
        >
          ${balance.toFixed(2)}
        </h2>
        <button
          style={{
            backgroundColor: "#4F46E5",
            color: "white",
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "8px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Add Money
        </button>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid #E5E7EB",
          margin: "2rem 0",
        }}
      />

      {/* Transaction History */}
      <div>
        <h2
          style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}
        >
          Transaction History
        </h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.95rem",
          }}
        >
          <thead>
            <tr
              style={{
                textAlign: "left",
                color: "#6B7280",
                borderBottom: "2px solid #E5E7EB",
              }}
            >
              <th style={{ padding: "0.75rem 0" }}>DATE</th>
              <th style={{ padding: "0.75rem 0" }}>DESCRIPTION</th>
              <th style={{ padding: "0.75rem 0", textAlign: "right" }}>
                AMOUNT
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((tx, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #E5E7EB" }}>
                  <td style={{ padding: "0.75rem 0" }}>{tx.date}</td>
                  <td style={{ padding: "0.75rem 0" }}>{tx.description}</td>
                  <td
                    style={{
                      padding: "0.75rem 0",
                      textAlign: "right",
                      color: tx.amount < 0 ? "#DC2626" : "#16A34A",
                      fontWeight: 600,
                    }}
                  >
                    {tx.amount < 0 ? "-" : "+"}${Math.abs(tx.amount).toFixed(2)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={3}
                  style={{
                    padding: "1.5rem 0",
                    textAlign: "center",
                    color: "#6B7280",
                  }}
                >
                  No transactions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallet;

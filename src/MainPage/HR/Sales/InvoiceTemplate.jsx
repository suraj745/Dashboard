import React from "react";

const InvoiceTemplate = () => {
  return (
    <section className="container border border-dark invoice_container pb-5">
      <section className="row justify-content-between navbar">
        <section
          className="col-sm-3"
          style={{ borderRight: "1px solid black" }}
        >
          <img src="/logo-pillar.png" alt="" />
        </section>
        <ul className="mt-4 mt-md-0 col col-md-8  col-lg-6">
          <li>
            <h2> Ofudz Tradings Private Limited</h2>
          </li>
          <li
            className="mt-2"
            style={{ fontWeight: "500", fontSize: "clamp(15px,4vw,18px)" }}
          >
            <span>Address :</span>
            <span>Bannerughatta Road, Bengaluru, Karnataka - 560 076.</span>
          </li>
          <li
            className="mt-2"
            style={{ fontWeight: "500", fontSize: "clamp(15px,4vw,18px)" }}
          >
            <span>E-mail :</span>
            <span>pillarnmqube@gmail.com, Phone : +91 99 00 424019</span>
          </li>
        </ul>
      </section>

      <ul
        className="row  align-items-center mt-4 justify-content-between text-center py-2"
        style={{
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
        }}
      >
        <li className="col-sm-2" style={{ fontSize: "17px" }}>
          <span>Inv. No. : </span>
          <strong>PILLAR001</strong>
        </li>
        <li className="col">
          <h2>TAX INVOICE</h2> <br />
          <span>
            <p style={{ fontSize: "12px" }}>
              (Issued Under Section 31 of GST Act, 2017)
            </p>
          </span>
        </li>
        <li className="col-sm-2" style={{ fontSize: "17px" }}>
          <span>Date :</span>
          <strong>
            <span>05</span> <span>02 </span> <span> 2022</span>
          </strong>
        </li>
      </ul>

      <ul className="row justify-content-between align-items-center py-4">
        <li className="col-md-5">
          <p className="fw-bold " style={{ fontSize: "18px" }}>
            Customer Name & Address
          </p>
          <h4>M/s Surya Hi-Tech Services Private Limited</h4>
          <p className="mt-2">
            #2nd Floor, Site #48, Jansons Sarah, down Town Park II,
            <br />
            Sy. No. 61/1 & 62, Meenakunte Village, Jala Hobali,
            <br />
            Bengaluru, Karnataka PIN : 562 125.
          </p>
        </li>
        <li className="col-md-5 text-md-end mt-4 mt-md-0">
          <p>Cust. PO. : POSB/00058/21-22</p>
          <p>Date : 02 02 2022</p>
          <strong>
            STATE CODE : 29 | <br />
            GSTIN : 29AARCS5526K1ZL | PAN : AARC5526K
          </strong>
        </li>
      </ul>

      <section className="row justify-content-center">
        <table
          className="table invoice_table"
          style={{
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
          }}
        >
          <thead>
            <tr scope="row">
              <th scope="col" style={{ borderRight: "1px solid black" }}>
                Sl.No.
              </th>
              <th scope="col" style={{ borderRight: "1px solid black" }}>
                Material Description
              </th>
              <th scope="col" style={{ borderRight: "1px solid black" }}>
                HSN Code{" "}
              </th>
              <th scope="col" style={{ borderRight: "1px solid black" }}>
                UOM
              </th>
              <th scope="col" style={{ borderRight: "1px solid black" }}>
                Qty
              </th>
              <th scope="col" style={{ borderRight: "1px solid black" }}>
                Rate
              </th>
              <th scope="col" style={{ borderRight: "1px solid black" }}>
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr scope="row">
              <td style={{ borderRight: "1px solid black" }}>1</td>
              <td style={{ borderRight: "1px solid black" }}>
                Soling Stone 5-8"{" "}
              </td>
              <td style={{ borderRight: "1px solid black" }}>25169020</td>
              <td style={{ borderRight: "1px solid black" }}>tonne</td>
              <td style={{ borderRight: "1px solid black" }}> 32.23</td>
              <td style={{ borderRight: "1px solid black" }}>595.00</td>
              <td style={{ borderRight: "1px solid black" }}>19,176.85</td>
            </tr>
            <tr scope="row">
              <td style={{ borderRight: "1px solid black" }}>2</td>
              <td style={{ borderRight: "1px solid black" }}>
                Soling Stone 5-8"{" "}
              </td>
              <td style={{ borderRight: "1px solid black" }}>25169020</td>
              <td style={{ borderRight: "1px solid black" }}>tonne</td>
              <td style={{ borderRight: "1px solid black" }}> 32.23</td>
              <td style={{ borderRight: "1px solid black" }}>595.00</td>
              <td style={{ borderRight: "1px solid black" }}>19,176.85</td>
            </tr>
          </tbody>
        </table>

        <table
          className="table invoice_table"
          style={{
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
          }}
        >
          <thead>
            <tr scope="row">
              <th scope="col" style={{ borderRight: "1px solid black" }}>
                SUB TOTAL
              </th>
              <th scope="col" style={{ borderRight: "1px solid black" }}>
                SGST @ 2.5%
              </th>
              <th scope="col" style={{ borderRight: "1px solid black" }}>
                CGST @ 2.5%
              </th>
              <th scope="col" style={{ borderRight: "1px solid black" }}>
                IGST @ 5%
              </th>
              <th scope="col" style={{ borderRight: "1px solid black" }}>
                GRAND TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            <tr scope="row">
              <td style={{ borderRight: "1px solid black" }}>₹ 41,663.05 </td>
              <td style={{ borderRight: "1px solid black" }}>₹1,041.58</td>
              <td style={{ borderRight: "1px solid black" }}>₹ 1,041.58</td>
              <td style={{ borderRight: "1px solid black" }}> ₹0.00</td>
              <td style={{ borderRight: "1px solid black" }}> ₹ 43,746.21</td>
            </tr>
            <tr scope="row">
              <td style={{ borderRight: "1px solid black" }}></td>
              <td style={{ borderRight: "1px solid black" }}></td>
              <td style={{ borderRight: "1px solid black" }}></td>
              <td style={{ borderRight: "1px solid black" }}></td>
              <td style={{ borderRight: "1px solid black" }}>
                <p> Authorised Signatory</p>
                <br />
                <br />
                <br />
                <p>
                  Sales Wing, South Zone <br />
                  Ofudz Tradings Private Limited
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="row justify-content-between">
        <ul
          className="col-lg-5 "
          style={{ fontSize: "17px", fontWeight: "600" }}
        >
          <li>
            <span>Bank Account Details : </span>
            <span>Ofudz Tradings Private Limited</span>
          </li>
          <li>
            <span>Account Name : </span>
            <span>Ofudz Tradings Private Limited</span>
          </li>
          <li>
            <span>Account No : </span>
            <span>39789190028</span>
          </li>
          <li>
            <span>IFSC Code : </span>
            <span>SBIN0014951 | UPI ID : ofudz@sbi</span>
          </li>
          <li>
            <span>Branch : </span>
            <span> Hulimavu Branch</span>
          </li>
        </ul>
        <section className="col-sm-3 text-center text-md-end">
          <img src="/logo-new.png" alt="" />
        </section>
      </section>
    </section>
  );
};

export default InvoiceTemplate;

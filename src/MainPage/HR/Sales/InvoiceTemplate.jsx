import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";

const InvoiceTemplate = ({ formData, getCalc }) => {
  const downloadInvoice = () => {
    html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0);

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: [612, 792],
      });

      pdf.internal.scaleFactor = 1;
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice-001.pdf");
    });
  };

  console.log("formData", formData, "getCalc", getCalc);
  return (
    <>
      <section
        id="invoiceCapture"
        className="container-fluid "
        style={{
          paddingBlock: "4rem",
          paddingInline: "5rem",
        }}
      >
        <section
          id="invoice_container"
          className="container   invoice_container pb-5"
          style={{
            border: "3px solid black",
          }}
        >
          <section className="row align-items-end justify-content-between navbar">
            <section
              className="col-sm-12 logo  col-md-3"
              style={{ borderRight: "3px solid black", height: "100%" }}
            >
              <img src="/public/LOGO.png" alt="" />
            </section>
            <ul className="mt-4 mt-md-0  col-sm-12 col-md-10 col-lg-7  ">
              <li>
                <h1 style={{ fontWeight: 700, fontSize: "2.2rem" }}>
                  Ofudz Tradings Private Limited
                </h1>
              </li>
              <li
                className="mt-2"
                style={{ fontWeight: "600", fontSize: "1.2rem" }}
              >
                <span>Address : </span>
                <span>Bannerughatta Road, Bengaluru, Karnataka - 560 076.</span>
              </li>
              <li style={{ fontWeight: "600", fontSize: "1.3rem" }}>
                <span>E-mail : </span>
                <span>pillarnmqube@gmail.com, Phone : +91 99 00 424019</span>
              </li>
            </ul>
          </section>

          <ul
            className="row  align-items-end mt-4 justify-content-between text-center py-2"
            style={{
              borderTop: "3px solid black",
              borderBottom: "3px solid black",
            }}
          >
            <li
              className="col-3"
              style={{ fontSize: "1.2rem", textAlign: "left" }}
            >
              <span>Inv. No. : </span>
              <strong>PILLAR001</strong>
            </li>
            <li className="col">
              <h2
                style={{
                  textDecoration: "underline",
                  fontWeight: 800,
                }}
              >
                TAX INVOICE
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 600 }}>
                (Issued Under Section 31 of GST Act, 2017)
              </p>
            </li>
            <li className="col-sm-3" style={{ fontSize: "1.2rem" }}>
              <span>Date : </span>
              <span>05</span> <span>02 </span> <span> 2022</span>
            </li>
          </ul>

          <ul className="row   text-start">
            <li className="col-lg-7">
              <p
                className=" "
                style={{ fontSize: "1.2rem", fontWeight: "600", padding: 0 }}
              >
                Customer Name & Address
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "clamp(1.4rem,4vw,1.6rem)",
                }}
              >
                M/s Surya Hi-Tech Services Private Limited
              </p>
              <p style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                #2nd Floor, Site #48, Jansons Sarah, down Town Park II,
                <br />
                Sy. No. 61/1 & 62, Meenakunte Village, Jala Hobali,
                <br />
                Bengaluru, Karnataka PIN : 562 125.
              </p>
            </li>
            <li
              className="col-lg-5 text-md-end mt-4 mt-md-0"
              style={{ fontSize: "1.2rem" }}
            >
              <p>
                Cust. PO. : POSB/00058/21-22 <br /> Date : 02 02 2022
              </p>

              <p
                className="mt-3"
                style={{ width: "100%", fontWeight: "700", fontSize: "1.2rem" }}
              >
                STATE CODE : 29 | <br />
                <span> GSTIN : 29AARCS5526K1ZL | PAN : AARC5526K</span>{" "}
              </p>
            </li>
          </ul>

          <section className="row justify-content-center">
            <table
              className="table invoice_table"
              style={{
                borderTop: "2px solid black",
                borderBottom: "2px solid black",
                borderRight: "none",
                borderLeft: "none",
                fontSize: "1.2rem",
                textAlign: "center",
              }}
            >
              <thead>
                <tr scope="row">
                  <th
                    scope="col"
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "2px solid black",
                    }}
                  >
                    Sl.No.
                  </th>
                  <th
                    scope="col"
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "2px solid black",
                    }}
                  >
                    Material Description
                  </th>
                  <th
                    scope="col"
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "2px solid black",
                    }}
                  >
                    HSN Code{" "}
                  </th>
                  <th
                    scope="col"
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "2px solid black",
                    }}
                  >
                    UOM
                  </th>
                  <th
                    scope="col"
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "2px solid black",
                    }}
                  >
                    Qty
                  </th>
                  <th
                    scope="col"
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "2px solid black",
                    }}
                  >
                    Rate
                  </th>
                  <th
                    scope="col"
                    style={{
                      borderRight: "none",
                      borderBottom: "2px solid black",
                    }}
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr scope="row">
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    1
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    Soling Stone 5-8"{" "}
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    25169020
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    tonne
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    {" "}
                    32.23
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    ₹ 595.00
                  </td>
                  <td
                    style={{
                      borderRight: "none",
                      borderBottom: "none",
                    }}
                  >
                    ₹ 19,176.85
                  </td>
                </tr>

                <tr scope="row">
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    2
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    Soling Stone 5-8"{" "}
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    25169020
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    tonne
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    {" "}
                    32.23
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    ₹ 595.00
                  </td>
                  <td
                    style={{
                      borderRight: "none",
                      borderBottom: "none",
                    }}
                  >
                    ₹ 19,176.85
                  </td>
                </tr>

                <tr scope="row">
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    <span style={{ opacity: "0" }}>1</span>
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "none",
                      borderBottom: "none",
                    }}
                  ></td>
                </tr>

                <tr scope="row">
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    {" "}
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "none",
                      borderBottom: "none",
                    }}
                  ></td>
                </tr>

                <tr scope="row">
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    <span style={{ opacity: "0" }}>1</span>
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "none",
                      borderBottom: "none",
                    }}
                  ></td>
                </tr>

                <tr scope="row">
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "none",
                      borderBottom: "none",
                    }}
                  ></td>
                </tr>

                <tr scope="row">
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    <span style={{ opacity: "0" }}>1</span>
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "none",
                      borderBottom: "none",
                    }}
                  ></td>
                </tr>

                <tr scope="row">
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    {" "}
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "none",
                      borderBottom: "none",
                    }}
                  ></td>
                </tr>

                <tr scope="row">
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    <span style={{ opacity: "0" }}>1</span>
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "none",
                      borderBottom: "none",
                    }}
                  ></td>
                </tr>

                <tr scope="row">
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    {" "}
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "none",
                      borderBottom: "none",
                    }}
                  ></td>
                </tr>

                <tr scope="row">
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    {" "}
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "none",
                      borderBottom: "none",
                    }}
                  ></td>
                </tr>
                <tr scope="row">
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    <span style={{ opacity: "0" }}>1</span>
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "none",
                      borderBottom: "none",
                    }}
                  ></td>
                </tr>

                <tr scope="row">
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  >
                    {" "}
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "none",
                      borderBottom: "none",
                    }}
                  ></td>
                </tr>
              </tbody>
            </table>

            <table
              className="table invoice_table"
              style={{
                borderTop: "2px solid black",
                borderBottom: "2px solid black",
                fontSize: "1.2rem",
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              <thead>
                <tr scope="row">
                  <th
                    scope="col"
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "2px solid black",
                    }}
                  >
                    SUB TOTAL
                  </th>
                  <th
                    scope="col"
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "2px solid black",
                    }}
                  >
                    SGST @ 2.5%
                  </th>
                  <th
                    scope="col"
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "2px solid black",
                    }}
                  >
                    CGST @ 2.5%
                  </th>
                  <th
                    scope="col"
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "2px solid black",
                    }}
                  >
                    IGST @ 5%
                  </th>
                  <th
                    scope="col"
                    style={{
                      borderBottom: "2px solid black",
                    }}
                  >
                    GRAND TOTAL
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr scope="row ">
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "2px solid black",
                    }}
                  >
                    ₹ 41,663.05{" "}
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "2px solid black",
                    }}
                  >
                    ₹1,041.58
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "2px solid black",
                    }}
                  >
                    ₹ 1,041.58
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "2px solid black",
                    }}
                  >
                    {" "}
                    ₹0.00
                  </td>
                  <td
                    style={{
                      borderBottom: "2px solid black",
                    }}
                  >
                    {" "}
                    ₹ 43,746.21
                  </td>
                </tr>
                <tr scope="row">
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "2px solid black",
                      borderBottom: "none",
                    }}
                  ></td>
                  <td
                    style={{
                      borderBottom: "none",
                      textAlign: "center",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                    }}
                  >
                    <p> Authorised Signatory</p>
                    <br />

                    <p>
                      Sales Wing, South Zone <br />
                      <span style={{ fontSize: "1.3rem" }}>
                        {" "}
                        Ofudz Tradings Private Limited
                      </span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="row justify-content-between align-items-center">
            <ul
              className="col-lg-6  text-start"
              style={{ fontWeight: "600", fontSize: "1.2rem" }}
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

              <li className="mt-5 ">
                <p> CIN : U51909KA2020PTC136704 | PAN : AADC02125Q |</p>
                <p>TAN : BLRO06752E| GSTIN : 29AADC02125Q1Z2 |</p>
              </li>
            </ul>
            <section className="col-sm-3 col-lg-5 text-center  ">
              <img src="/public/logo-new.png" alt="" />
            </section>
          </section>
        </section>
      </section>
      <section className="row py-4">
        <div className="submit-section">
          <button
            className="btn btn-primary submit-btn"
            onClick={downloadInvoice}
          >
            Save
          </button>
        </div>
      </section>
    </>
  );
};

export default InvoiceTemplate;

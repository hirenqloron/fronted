import React, { useRef } from 'react';
import QloronLogo from "../../../svgIcons/qloronLogo.svg";
import styles from "./invoicePdfView.module.css";
import { Card, Divider } from '@mui/material';
import { BsCursor } from 'react-icons/bs';
import ReactToPrint from 'react-to-print';
const inStyle = {
    minWidth: " 600px"
}
const InvoicePdfView = () => {
    
    let componentRef = useRef();

  return (
    <div className={styles.main}>
     <Card className={styles.card1} ref={(response) => (componentRef = response)}>

     <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div id="invoice">

                            <div className="invoice overflow-auto">
                                <div style={inStyle}>
                                    <header>
                                        <div className="row">
                                            <div className="col">
                                                <a href="javascript:;">
                                                    <img src={QloronLogo} width="265" alt="" />
                                                </a>
                                            </div>
                                            <div className="col company-details">
                                                <div className='infoHead'>
                                                    <h4 className='title mb-0'>{propsy.title} </h4>
                                                    <p className='addres mb-0'> {propsy.add} </p>
                                                    <p className='mail mb-1'>
                                                        {propsy.country} &nbsp;
                                                        <a href="mailto:sales@qloron.com">{propsy.mail}</a> | {propsy.mob}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </header>
                                    <main>
                                        <div className="row contacts mb-4">
                                            <div className="col-7 invoice-to">
                                                <p className="mb-0">Bill TO</p>
                                                {/* <p className="to mb-0"> <b>{this.data.billTo}</b> </p>
                                                <div className="address">{this.data.location.addres},{this.data.location.city}
                                                    ,{this.data.location.zipcode}</div> */}
                                                <p className="to mb-0"> <b>ok</b> </p>
                                            <div className="address">ok</div>
                                            </div>
                                            <div className="col-5 invoice-details">
                                                <div className="invoice-id row">
                                                    <b className='col'>Invoice#</b>
                                                    <span className='col'>
                                                        INV - 2023QPL000
                                                    </span>
                                                </div>
                                                <div className="date row">
                                                    <b className='col'>Invoice Date </b>
                                                    <span className='col'> 01 January 2020  </span>
                                                </div>
                                                <div className="row">
                                                    <b className='col'>Sales Person</b>
                                                    <span className='col'> Nikhilesh Mandal  </span>

                                                </div>




                                            </div>
                                        </div>
                                        <div className='gst'>
                                            GSTIN:
                                        </div>
                                        <table className='table table-bordered'>
                                            <thead>
                                                <tr>
                                                    <th scope='col'>#</th>
                                                    <th className='text-left'>Item</th>
                                                    <th className="text-left">DESCRIPTION</th>
                                                    <th className="text-right">Developer</th>
                                                    <th className="text-right">Join Date</th>
                                                    <th className="text-right">WD(31)</th>
                                                    <th className="text-right">Leave</th>
                                                    <th className="text-right">HSN/SAC</th>
                                                    <th className="text-right">IGST</th>
                                                    <th className="text-left">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* {this.data.length > 0 && this.data.map((res:any, index:any) => {
                        // console.log('res >> ', res);
                        return (
                            <tr key={res._id}>
                                <td className="no"  >{index + 1}</td>
                                <td className="text-left">
                                    {res.item}
                                </td>
                                <td className="text-left"> {res.description} </td>
                                <td className="text-left">{res.developerName}</td>
                                <td className="text-left">{res.joiningDate} </td>
                                <td>{res.wd} </td>
                                <td>{res.leave}</td>
                                <td>{res.hsn_sac}</td>
                                <td>{res.igst_sgst_cgst}</td>
                                <td>{res.amount}</td>
                              
                            </tr>
                        );
                    })} */}
                                                {/* <tr>
                                                    <td className="no"  >0</td>
                                                    <td className="text-left">
                                                        {this.data.item}
                                                    </td>
                                                    <td className="text-left">{this.data.description} </td>
                                                    <td className="text-left">{this.data.developerName}</td>
                                                    <td className="text-left">{this.data.joiningDate} </td>
                                                    <td className="text-left">{this.data.WD}</td>
                                                    <td className="text-left">{this.data.leave}</td>
                                                    <td className="text-left">{this.data.hsn_sac}</td>
                                                    <td className="text-left">{this.data.igst_sgst_cgst}</td>
                                                    <td className="text-left">{this.data.amount}</td>
                                                </tr> */}
                                                <tr>
                                                <td className="no"  >01</td>
                                                <td className="text-left">
                                                    ok
                                                </td>
                                                <td className="text-left">ok </td>
                                                <td className="text-left">ok</td>
                                                <td className="text-left">ok</td>
                                                <td className="text-left">ok</td>
                                                <td className="text-left">ok</td>
                                                <td className="text-left">ok</td>
                                                <td className="text-left">ok</td>
                                                <td className="text-left">ok</td>
                                            </tr>

                                            </tbody>

                                        </table>
                                        <div className="row afterTable">
                                            <p className='col-7 '>
                                                For assistance kindly mail us at  <a href="mailto:sales@qloron.com">{propsy.mail}</a>, or chat with our support
                                                team on WhatsApp +91-7620958851. You may also visit  <a href="https://www.qloron.com/">www.qloron.com</a>  if
                                                you have any query for your invoices, payments made, and for the complete
                                                statement.
                                            </p>
                                            <div className='col-5 text-center'>
                                                <div className='row'>
                                                    <span className='col'>Sub Total </span>
                                                    <span className='col'>
                                                        0, 00,000.00
                                                    </span>
                                                </div>
                                                <div className='row'>
                                                    <span className='col'>Total Taxable Amount  </span>
                                                    <span className='col'>
                                                        0, 00,000.00
                                                    </span>
                                                </div>
                                                <div className='row '>
                                                    <span className='col'>IGST (18%) </span>
                                                    <span className='col'>
                                                        00,000.00
                                                    </span>
                                                </div>
                                                <div className='borderTb row my-3 px-3'>
                                                    <span className='col text-danger'>Total</span>
                                                    <span className='col text-danger'>
                                                        0,00,000.00
                                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            Total In Words: <i className='font-weight-bold'>Rupee ______________________________________________________Only </i>
                                        </div>
                                        <div className='infoShort mt-2'>
                                            <p className='mb-0'>Our Bank Details for NEFT/ RTGS, Online Fund Transfer Name of bank : INDIAN Bank</p>
                                            <p className='mb-0'>Account Name: QLORON PRIVATE LIMITED</p>
                                            <p className='mb-0'>Current Account Number : 6973814975</p>
                                            <p className='mb-0'>IFSC Code : IDIB000L015 | SWIFT Code: IDIBINBBHYD | MICR Code: 500019039</p>
                                        </div>
                                        <div className='tc mt-3'>
                                            <p className='font-weight-bold mb-1'>Terms & Conditions</p>
                                            <p className='tc'>
                                                Your acceptance of this estimate should result in payment for us to start the preparation for delivery of service as mentioned in the above table.
                                                Until the payment is received in full QloronPrivate Limited shall not be responsible for anything whatsoever. You further agree that for all purposes,
                                                only the courts at Nagpur shall have exclusivejurisdiction.
                                            </p>
                                        </div>
                                        <div className='signature'>
                                            <div className='boxSign '></div>
                                            <p className='font-weight-bold mb-0'>Nikhilesh Mandal</p>
                                            <p className='font-weight-bold mb-0'>CEO</p>
                                            <p className='font-weight-bold mb-0'>QLORON PVT LTD</p>
                                        </div>

                                    </main>
                                    <footer>
                                        <p>
                                            <span className='font-weight-light'>Corporate Office:</span> Qloron Pvt. Ltd.#12, Puttamma Arcade,Near Sweet Sagar Bakery, Banshankari,Bangalore, Karnataka, India – 560070 | CIN
                                        </p>
                                        <p>
                                            <span className='font-weight-light'>Number:</span>  U72900MH2019PTC323800, GSTIN Number: 27AAACQ6070D1ZM, LUT(ARN): AD271122006243R </p>
                                        <p>
                                            <span className='font-weight-light'>PAN Number:</span> AAACQ6070D, Email:  <a href="mailto:sales@qloron.com">{propsy.mail}</a>, Customer Care: 7020038436    </p>
                                    </footer>
                                </div>
                                {/* <!--DO NOT DELETE THIS div. IT is responsible for showing footer always at the bottom--> */}
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{" "}
</Card>{" "}
      <Card className={styles.card2}>
        <Card className={styles.card3}>
          <div className={styles.btnDiv9}>
            <button type="submit" className={styles.btn19}>
              <BsCursor size={17} /> Send Invoice
            </button>
            <button className={styles.btn20}>Preview</button>
            <ReactToPrint
                content={() => componentRef}
                trigger={() => <button className={styles.btn20}>Save</button>}
            />
          
          </div>
        </Card>
      </Card>
    </div>
  );
};

let propsy = {
  title: 'QLORON PRIVATE LIMITED',
  add: 'Plot No. 92, Gajanan Nagar, Nagpur-440027',
  country: 'India',
  mail: 'sales@qloron.com',
  mob: ' +91 7020038436',
};

export default InvoicePdfView;

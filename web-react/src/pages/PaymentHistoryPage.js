import React, { useState } from 'react';
import Navigator from "../components/Navigator";
import UserBar from "../components/UserBar";
import { Link } from "react-router-dom";

const payments = []; // Danh sách giao dịch (giả định)

const PaymentHistoryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col">
      <div className="w-full sticky top-0 bg-white z-10">
        <Navigator />
      </div>
      <div className="flex ">
        <div className="border flex flex-col gap-4 justify-start items-center">
          <div className="w-full sticky top-16 bg-white z-10 shadow-md">
            <UserBar />
          </div>
        </div>
        <div className="flex flex-col mt-4 w-[1200px] mx-auto pl-8 pr-8 bg-gray-50 rounded shadow-lg">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  Trang chủ
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <Link
                    to="/manage"
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                    Quản lý
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                    Lịch sử thanh toán tin
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h2 className="text-4xl mt-4 mb-4">Lịch sử thanh toán tin</h2>
          <div className="container mx-auto mt-4">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Thời gian</th>
                  <th className="px-4 py-2">Loại hoạt động</th>
                  <th className="px-4 py-2">Mã tin đăng</th>
                  <th className="px-4 py-2">Loại tin</th>
                  <th className="px-4 py-2">Số dư</th>
                  <th className="px-4 py-2">Phí</th>
                  <th className="px-4 py-2">Còn lại</th>
                  <th className="px-4 py-2">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {
                  payments.map((payment) => (
                    <tr key={payment.id}>
                      <td>{payment.time}</td>
                      <td>{payment.activityType}</td>
                      <td>{payment.postId}</td>
                      <td>{payment.postType}</td>
                      <td>{payment.balance}</td>
                      <td>{payment.fee}</td>
                      <td>{payment.remaining}</td>
                      <td>{payment.status}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryPage;
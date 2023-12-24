import React, { useEffect } from 'react';
import '../handle_orders/ReceiptForm.scss'; // Tạo một file CSS để thiết lập kiểu cho modal

const ReceiptForm = ({ rowId, setOpen }: { rowId: number | null, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    useEffect(() => {
    // Mở modal khi rowId thay đổi
    if (rowId !== null) {
      // Thực hiện các công việc cần thiết để mở modal
    }
  }, [rowId]);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className={`modal ${rowId !== null ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Receipt</h2>
        <p>ID của đơn hàng là {rowId !== null ? rowId : 'N/A'}</p>

{/* 
        <div className='receipt'>

        </div> */}

        <button onClick={closeModal}>Đóng Modal</button>
      </div>
    </div>
  );
};

export default ReceiptForm;

import React, { useState } from 'react';
import './addOrderModal.scss'; // Tạo một file CSS để thiết lập kiểu cho modal

type AddOrderModalProps = {
  onClose: () => void;
};

const AddOrderModal: React.FC<AddOrderModalProps> = ({ onClose }) => {
  const [selectedSide, setSelectedSide] = useState<'pickup' | 'delivery'>('pickup');
  const [pickupLocation, setPickupLocation] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('');

  const handleSideSelect = (side: 'pickup' | 'delivery') => {
    setSelectedSide(side);
  };

  const handleLocationSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const locationValue = event.target.value;
    if (selectedSide === 'pickup') {
      setPickupLocation(locationValue);
    } else {
      setDeliveryLocation(locationValue);
    }
  };

  const handleConfirm = () => {
    // Thực hiện các công việc cần thiết khi xác nhận form
    console.log('Điểm tập kết:', pickupLocation);
    console.log('Điểm giao dịch:', deliveryLocation);

    // Đóng modal
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-sides">
          <div
            className={`modal-side ${selectedSide === 'pickup' ? 'active' : ''}`}
            onClick={() => handleSideSelect('pickup')}
          >
            <h3>Đến điểm tập kết</h3>
            <select value={pickupLocation} onChange={handleLocationSelect}>
              <option value="A">Điểm tập kết A</option>
              <option value="B">Điểm tập kết B</option>
              {/* Thêm các lựa chọn khác tùy thuộc vào danh sách của bạn */}
            </select>
          </div>
          <div
            className={`modal-side ${selectedSide === 'delivery' ? 'active' : ''}`}
            onClick={() => handleSideSelect('delivery')}
          >
            <h3>Đến điểm giao dịch</h3>
            <select value={deliveryLocation} onChange={handleLocationSelect}>
              <option value="X">Điểm giao dịch X</option>
              <option value="Y">Điểm giao dịch Y</option>
              {/* Thêm các lựa chọn khác tùy thuộc vào danh sách của bạn */}
            </select>
          </div>
        </div>
        <button className="confirm-button" onClick={handleConfirm}>
          Xác nhận
        </button>
      </div>
    </div>
  );
};

export default AddOrderModal;

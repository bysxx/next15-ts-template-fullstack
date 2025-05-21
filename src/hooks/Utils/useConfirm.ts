const useConfirm = (onConfirm: () => void, onCancel: () => void, message = "") => {
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

export default useConfirm;

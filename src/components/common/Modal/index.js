import React from 'react';

const Modal = ({ title, desc, action }) => {
    return (
        <>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-center">
                    <h3 className="font-bold text-xl">{title}</h3>
                    <p className="py-4 text-lg">{desc}</p>
                    <div className="modal-action justify-center gap-2">
                        <label htmlFor="my-modal-6" className="btn btn-error rounded-full text-white tracking-wider px-10">
                            {action === "Log Out" ? "Log Out" : action}
                        </label>
                        <label htmlFor="my-modal-6" className="btn btn-success rounded-full text-white tracking-wider px-10">Cancel</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;

import { create } from "zustand";
const useRecordStore = create((set) => ({
    records: [],
    setRecords: (record) =>
        set((state) => ({
            records: [...state.records, record],
        })),
    removeRecord: (id) =>
        set((state) => ({
            records: state.records.filter((record) => record.id !== id),
        })),
    changeQuantity: (id, quantity) =>
        set((state) => ({
            records: state.records.map((record) => {
                record.id === id
                    ? {
                          ...record,
                          quantity: quantity + parseInt(record.quantity),
                          cost:
                              record.product.price *
                              (quantity + parseInt(record.quantity)),
                      }
                    : record;
            }),
        })),
}));
export default useRecordStore;

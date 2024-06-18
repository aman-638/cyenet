import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, selectItem } from "../redux/itemSlice";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.item.selectedItem);
  const loading = useSelector((state) => state.item.loading);
  const itemId = sessionStorage.getItem("item_id");

  useEffect(() => {
    if (!item || item.id !== Number(itemId)) {
      dispatch(setLoading(true));
      const fetchItemDetails = async () => {
        try {
          const response = await fetch(`/api/items/${itemId}`);
          const data = await response.json();
          dispatch(selectItem(data));
          dispatch(setLoading(false));
        } catch (error) {
          console.error("Error fetching item details:", error);
          dispatch(setLoading(false));
        }
      };

      fetchItemDetails();
    }
  }, [dispatch, item, itemId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {item ? (
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          {/* Other item details */}
        </div>
      ) : (
        <div>No item selected</div>
      )}
    </div>
  );
};

export default ItemDetails;

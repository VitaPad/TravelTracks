import { useState } from "react";
import css from "./BookingForm.module.css";
import toast from "react-hot-toast";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";
export default function BookingFormTruck() {
  const [formState, setFormState] = useState({
    startDate: new Date(),
    endDate: null,
    name: "",
    email: "",
    comment: "",
  });
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const toggleDatePicker = () => {
    setIsDatePickerOpen((prevState) => !prevState);
  };

  const formatDate = (startDate, endDate) => {
    if (!endDate) return "";
    return `${format(startDate, "MM.dd.yyyy")} - ${format(
      endDate,
      "MM.dd.yyyy"
    )}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };

  const handleDateChange = (item) => {
    setFormState((prevState) => ({
      ...prevState,
      startDate: item.selection.startDate,
      endDate: item.selection.endDate,
    }));
    setIsDatePickerOpen(false);
  };

  const handleSendForm = (e) => {
    e.preventDefault();
    toast.success(`Your data has been sent successfully!`);

    setFormState({
      startDate: new Date(),
      endDate: null,
      name: "",
      email: "",
      comment: "",
    });
  };
  return (
    <form onSubmit={handleSendForm} className={css.form}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <input
        type="text"
        name="name"
        required
        onChange={handleChange}
        className={css.input}
        placeholder="Name*"
      />
      <input
        type="email"
        name="email"
        required
        className={css.input}
        placeholder="Email*"
        onChange={handleChange}
      />
      <input
        type="text"
        name="bookingDate"
        required
        className={css.input}
        placeholder="Booking date*"
        onClick={toggleDatePicker}
        value={
          formState.endDate
            ? formatDate(formState.startDate, formState.endDate)
            : ""
        }
      />
      {isDatePickerOpen && (
        <div className={css.dataPickew}>
          <DateRangePicker
            onChange={handleDateChange}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            ranges={[
              {
                startDate: formState.startDate,
                endDate: formState.endDate,
                key: "selection",
              },
            ]}
            className={css.dataPick}
          />
        </div>
      )}
      <textarea
        name="comment"
        placeholder="Comment"
        className={css.commentInput}
        onChange={handleChange}
        value={formState.comment}
      />
      <button className={css.sendBtn} type="submit">
        Send
      </button>
    </form>
  );
}

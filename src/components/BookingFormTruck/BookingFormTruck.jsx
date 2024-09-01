import css from "./BookingForm.module.css"; // Замість цього використовуйте свої стилі

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
    <form
      action="/api/bookings" // URL, куди будуть відправлені дані форми
      method="POST" // Метод відправки даних
      className={css.form}
    >
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <input
        type="text"
        name="name"
        required
        className={css.input}
        placeholder="Name*"
      />
      <input
        type="email"
        name="email"
        required
        className={css.input}
        placeholder="Email*"
      />
      <input
        type="text"
        name="bookingDate"
        required
        className={css.input}
        placeholder="Booking date*"
      />
      <textarea
        name="comment"
        placeholder="Comment"
        className={css.commentInput}
      />
      <button className={css.sendBtn} type="submit">
        Send
      </button>
    </form>
  );
}

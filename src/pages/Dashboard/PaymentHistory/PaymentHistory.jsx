import { useQuery } from "@tanstack/react-query";
import SectionTile from "../../../components/SectionTitle/SectionTile";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <div className="mt-5">
        <SectionTile
          subHeading={"---At a Glance!---"}
          heading={"PAYMENT HISTORY"}
        ></SectionTile>
      </div>
      <div className="flex gap-[120px]">
        <h2 className="text-[32px]">Total Payments: {payments.length}</h2>
      </div>
      <div className="w-3/4">
        <div
          className="overflow-x-auto mt-[38px]"
          style={{ borderRadius: "15px 15px 0px 0px" }}
        >
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th></th>
                <th>Email</th>
                <th>Transaction ID</th>
                <th>Price</th>
                <th>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {payments.map((payment, idx) => (
                <tr key={payment._id}>
                  <th>{idx + 1}</th>
                  <td>{payment.email}</td>
                  <td>{payment.transactionId}</td>
                  <td>${payment.price}</td>
                  <td>${payment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;

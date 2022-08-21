import { subHours, isBefore } from "date-fns";

import Queue from "../../lib/Queue";
import CancellationMail from "../jobs/CancellationMail";

import Appointment from "../models/Appointment";
import User from "../models/User";

class CancelAppointmentService {
    async run({ id, user_id }) {
        const appointment = await Appointment.findByPk(id, {
            include: [
                {
                    model: User,
                    as: "provider",
                    attributes: ["name", "email"],
                },
                {
                    model: User,
                    as: "user",
                    attributes: ["name"],
                },
            ],
        });

        if (appointment.user_id !== user_id) {
            throw new Error(
                "You don't have permission to cancel this appointment"
            );
        }

        const dateWithSub = subHours(appointment.date, 2);

        if (isBefore(dateWithSub, new Date())) {
            throw new Error(
                "You can only cancel appointments 2 hours in advance"
            );
        }

        if (appointment.canceled_at) {
            throw new Error("This appointment is already canceled");
        }

        appointment.canceled_at = new Date();

        await appointment.save();

        Queue.add(CancellationMail.key, { appointment });

        return appointment;
    }
}

export default new CancelAppointmentService();

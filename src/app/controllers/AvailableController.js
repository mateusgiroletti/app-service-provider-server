import { parseISO, } from "date-fns";
import AvailableService from "../services/AvailableService";

class AvailableController {
    async index(req, res) {
        const { providerId } = req.params;
        const { date } = req.query;

        if (!date) {
            return res.status(400).json({ error: "Invalid date" });
        }

        const searchDate = parseISO(date);

        const available = await AvailableService({
            providerId, searchDate
        });

        return res.json(available);
    }
}

export default new AvailableController();

import courtSvg from "../Assets/image/Court.svg"
import monitorSvg from "../Assets/image/Monitor.svg"
import lawyer from "../Assets/image/Lawyer.svg"
import chipSvg from "../Assets/image/Chip.svg"
import folderSvg from "../Assets/image/Folder.svg"
import groupSvg from "../Assets/image/Group.svg"
const products = [
  {
    head: "Client-Wise Intelligence", content: "Every client is distinct, and so should their AI be. " +
      "We ensure a tailored federated learning based AI experience for each client, " +
      "reflecting their unique needs & challenges.", svg: `${courtSvg}`
  },
  {
    head: "White-Labelled Brilliance", content: "Own your dashboard. With our white-labelled solutions, " +
      "it's not just about using a platform; it's about enhancing your brand legacy", svg: `${monitorSvg}`
  },
  {
    head: "Lawyer In the Loop",
    content: "Our AI extends your team's capabilities without replacing the human element",
    svg: `${lawyer}`
  },
  {
    head: "Transparent AI Mechanisms", content: "We believe in clarity. No hidden processes, no black boxes." +
      " Just transparent AI mechanisms you can trust.", svg: `${chipSvg}`
  },
  {
    head: "Your Data, Your Turf", content: "With our on-premise promise, your data remains within your control, " +
      "ensuring maximum security and compliance.", svg: `${folderSvg}`
  },
  {
    head: "Elevate Practice", content: "Harness the power of AI to enhance your legal strategies," +
      " ensuring they are informed, compliant, and innovative.", svg: `${groupSvg}`
  }
]

export default products;

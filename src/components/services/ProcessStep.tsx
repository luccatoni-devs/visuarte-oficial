import { CheckCircle } from "lucide-react";
import BeforeAfterViewer from "./BeforeAfterViewer";
import before1 from "@/assets/before_after/before1.jpg";
import before2 from "@/assets/before_after/before2.jpg";
import before3 from "@/assets/before_after/before3.jpg";
import before4 from "@/assets/before_after/before4.jpg";
import before5 from "@/assets/before_after/before5.jpg";
import before6 from "@/assets/before_after/before6.jpg";
import before7 from "@/assets/before_after/before7.jpg";
import after1 from "@/assets/before_after/after1.jpg";
import after2 from "@/assets/before_after/after2.jpg";
import after3 from "@/assets/before_after/after3.jpg";
import after4 from "@/assets/before_after/after4.jpg";
import after5 from "@/assets/before_after/after5.jpg";
import after6 from "@/assets/before_after/after6.jpg";
import after7 from "@/assets/before_after/after7.jpg";

interface ProcessStepProps {
  step: string;
  stepIndex: number;
  category: string;
}

const ProcessStep = ({ step, stepIndex, category }: ProcessStepProps) => {
  const beforeImages = [before1, before2, before3, before4, before5, before6, before7];
  const afterImages = [after1, after2, after3, after4, after5, after6, after7];

  // Get images for this step (cycle through available images)
  const imageIndex = stepIndex % beforeImages.length;
  const beforeImage = beforeImages[imageIndex];
  const afterImage = afterImages[imageIndex];

  return (
    <div className="flex items-center text-muted-foreground group">
      <CheckCircle className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
      <span className="flex-1">{step}</span>
      <BeforeAfterViewer
        beforeImage={beforeImage}
        afterImage={afterImage}
        stepTitle={step}
      />
    </div>
  );
};

export default ProcessStep;
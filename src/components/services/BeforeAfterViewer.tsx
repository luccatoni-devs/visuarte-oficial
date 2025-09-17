import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye, ArrowRight } from "lucide-react";

interface BeforeAfterViewerProps {
  beforeImage: string;
  afterImage: string;
  stepTitle: string;
}

const BeforeAfterViewer = ({ beforeImage, afterImage, stepTitle }: BeforeAfterViewerProps) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="ml-2 p-1 h-auto text-primary hover:text-primary-foreground"
        >
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-center">{stepTitle}</h3>
          
          <div className="flex items-center justify-center gap-4">
            <Button
              variant={!showAfter ? "default" : "outline"}
              onClick={() => setShowAfter(false)}
            >
              Antes
            </Button>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <Button
              variant={showAfter ? "default" : "outline"}
              onClick={() => setShowAfter(true)}
            >
              Depois
            </Button>
          </div>

          <div className="relative aspect-video w-full max-w-2xl mx-auto overflow-hidden rounded-lg">
            <img
              src={showAfter ? afterImage : beforeImage}
              alt={`${stepTitle} - ${showAfter ? "Depois" : "Antes"}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
              {showAfter ? "Depois" : "Antes"}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BeforeAfterViewer;
export const ProgressBarPrototype = () => {
    return (
        <div className="flex gap-2 h-2">
            <span className="w-[calc(25%-0px)] rounded-[2px] bg-blue-600 h-full" />
            <span className="w-[calc(25%-0px)] rounded-[2px] bg-green-600 h-full" />
            <span className="w-[calc(25%-0px)] rounded-[2px] bg-red-600 h-full" />
            <span className="w-[calc(25%-0px)] rounded-[2px] bg-orange-600 h-full" />
        </div>
    );
};

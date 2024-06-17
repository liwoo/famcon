import { ContributorsSummaryData } from '@/data/contributors';

export const ContributorsDetails = () => {
    return (
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-8 mt-2">
            {ContributorsSummaryData.map((item) => (
                <div
                    key={item.color}
                    className="w-full gap-[4px] flex flex-col"
                >
                    <div className="gap-2 flex items-center">
                        <div
                            className={`w-[14px] rounded-[999px] bg-${item.color}-600 h-2`}
                        />
                        <h1 className="leading-[24px] text-[16px] font-light text-[#595959] capitalize">
                            {item.title}
                        </h1>
                    </div>
                    <span className="flex items-end gap-2">
                        <h1 className="font-light text-[30px] leading-[38px] ">
                            {item.value}
                        </h1>
                        <p className="font-light text-[16px] leading-[24px]">
                            Contributors
                        </p>
                    </span>
                </div>
            ))}
        </div>
    );
};

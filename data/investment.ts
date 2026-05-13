// Investment Calculators — auto-built from XLSX + human-written overrides
// 17 calculators | category: investment

import type { Calculator } from './types';

export const investmentCalculators: Calculator[] = [
  {
    slug: "investment-compound-interest-calculator",
    variant: "compound-interest",
    title: "Compound Interest Calculator",
    topic: "Compound Interest",
    categorySlug: "investment",
    categoryName: "Investment",
    formulaType: "compound",
    formula: "FV = P(1 + r/n)^(n×t)",
    inputs: ["Principal", "Rate", "Years", "Compounding Frequency"],
    outputs: ["Future Value", "Interest Earned", "Effective Annual Yield"],
    longTailKeyword: "compound interest investment calculator returns growth",
    metaDescription: "Calculate how any investment grows with compound interest over time. Adjust compounding frequency, rate, and term to see the exact future value.",
    intro: "Calculate how any investment grows with compound interest over time. Enter your principal and get future value and interest earned instantly — no spreadsheet required.",
    summary: "Calculate how any investment grows with compound interest over time.",
    article: [
      "The Compound Interest Calculator works by applying the formula: FV = P(1 + r/n)^(n×t). Each input plays a distinct role — small changes to principal can shift future value significantly, which is why running multiple scenarios before making a decision is valuable.",
      "To use this calculator effectively, gather accurate values for Principal, Rate, Years, Compounding Frequency. Estimates are fine for exploration, but the more precise your inputs, the more actionable the output. The calculator instantly returns Future Value, Interest Earned, Effective Annual Yield, giving you a clear picture of where you stand.",
      "This type of investment calculation is commonly used in real planning scenarios — not just academic exercises. Whether you are comparing options, setting a target, or checking your current position, the Compound Interest Calculator gives you a reliable number to work from. Always revisit the calculation if any input changes significantly."
    ],
    howItWorks: [
      "Enter your principal in the first field.",
      "Fill in rate, years to complete the required inputs.",
      "The calculator instantly shows Future Value, Interest Earned, Effective Annual Yield based on the formula: FV = P(1 + r/n)^(n×t)."
    ],
    faqs: [
      { question: "What does the Compound Interest Calculator calculate?", answer: "It calculates future value, interest earned, effective annual yield using the formula FV = P(1 + r/n)^(n×t). The inputs required are principal, rate, years, compounding frequency." },
      { question: "What inputs do I need for the Compound Interest Calculator?", answer: "You need: Principal; Rate; Years; Compounding Frequency. Use accurate figures from your actual situation for the most useful result." },
      { question: "How accurate are the results?", answer: "Results are mathematically precise given the inputs you provide. The formula used is: FV = P(1 + r/n)^(n×t). Accuracy depends on how precise your input values are — estimates work for planning, but use exact figures for final decisions." },
    ],
    relatedSlugs: ["investment-investment-growth-calculator", "investment-portfolio-allocation-calculator", "investment-dollar-cost-averaging-calculator", "investment-future-value-calculator"],
  },
  {
    slug: "investment-investment-growth-calculator",
    variant: "investment-growth",
    title: "Investment Growth Calculator",
    topic: "Investment Growth",
    categorySlug: "investment",
    categoryName: "Investment",
    formulaType: "growth",
    formula: "Growth = starting value compounded plus recurring contributions over time",
    inputs: ["Starting Investment", "Monthly Contribution", "Rate", "Years"],
    outputs: ["Ending Balance", "Contributions Total", "Investment Gain"],
    longTailKeyword: "investment growth investment calculator returns growth",
    metaDescription: "Project investment growth from a starting balance plus regular monthly contributions. See total invested, total gain, and ending balance at any return rate.",
    intro: "Project investment growth from a starting balance plus regular monthly contributions. Enter your starting investment and get ending balance and contributions total instantly — no spreadsheet required.",
    summary: "Project investment growth from a starting balance plus regular monthly contributions.",
    article: [
      "The Investment Growth Calculator works by applying the formula: Growth = starting value compounded plus recurring contributions over time. Each input plays a distinct role — small changes to starting investment can shift ending balance significantly, which is why running multiple scenarios before making a decision is valuable.",
      "To use this calculator effectively, gather accurate values for Starting Investment, Monthly Contribution, Rate, Years. Estimates are fine for exploration, but the more precise your inputs, the more actionable the output. The calculator instantly returns Ending Balance, Contributions Total, Investment Gain, giving you a clear picture of where you stand.",
      "This type of investment calculation is commonly used in real planning scenarios — not just academic exercises. Whether you are comparing options, setting a target, or checking your current position, the Investment Growth Calculator gives you a reliable number to work from. Always revisit the calculation if any input changes significantly."
    ],
    howItWorks: [
      "Enter your starting investment in the first field.",
      "Fill in monthly contribution, rate to complete the required inputs.",
      "The calculator instantly shows Ending Balance, Contributions Total, Investment Gain based on the formula: Growth = starting value compounded plus recurring contributions over time."
    ],
    faqs: [
      { question: "What does the Investment Growth Calculator calculate?", answer: "It calculates ending balance, contributions total, investment gain using the formula Growth = starting value compounded plus recurring contributions over time. The inputs required are starting investment, monthly contribution, rate, years." },
      { question: "What inputs do I need for the Investment Growth Calculator?", answer: "You need: Starting Investment; Monthly Contribution; Rate; Years. Use accurate figures from your actual situation for the most useful result." },
      { question: "How accurate are the results?", answer: "Results are mathematically precise given the inputs you provide. The formula used is: Growth = starting value compounded plus recurring contributions over time. Accuracy depends on how precise your input values are — estimates work for planning, but use exact figures for final decisions." },
    ],
    relatedSlugs: ["investment-compound-interest-calculator", "investment-portfolio-allocation-calculator", "investment-dollar-cost-averaging-calculator", "investment-future-value-calculator"],
  },
  {
    slug: "investment-portfolio-allocation-calculator",
    variant: "portfolio-allocation",
    title: "Portfolio Allocation Calculator",
    topic: "Portfolio Allocation",
    categorySlug: "investment",
    categoryName: "Investment",
    formulaType: "ratio",
    formula: "Target Allocation = Portfolio Value × Target Weight for each asset",
    inputs: ["Total Portfolio", "Target Weights", "Current Holdings"],
    outputs: ["Target Dollar Per Asset", "Over/Under Allocation", "Rebalance Trades"],
    longTailKeyword: "portfolio allocation investment calculator returns growth",
    metaDescription: "Calculate target dollar amounts for each asset class in your portfolio. See current vs target weights and exactly how much to buy or sell to rebalance.",
    intro: "Calculate target dollar amounts for each asset class in your portfolio. Enter your total portfolio and get target dollar per asset and over/under allocation instantly — no spreadsheet required.",
    summary: "Calculate target dollar amounts for each asset class in your portfolio.",
    article: [
      "The Portfolio Allocation Calculator works by applying the formula: Target Allocation = Portfolio Value × Target Weight for each asset. Each input plays a distinct role — small changes to total portfolio can shift target dollar per asset significantly, which is why running multiple scenarios before making a decision is valuable.",
      "To use this calculator effectively, gather accurate values for Total Portfolio, Target Weights, Current Holdings. Estimates are fine for exploration, but the more precise your inputs, the more actionable the output. The calculator instantly returns Target Dollar Per Asset, Over/Under Allocation, Rebalance Trades, giving you a clear picture of where you stand.",
      "This type of investment calculation is commonly used in real planning scenarios — not just academic exercises. Whether you are comparing options, setting a target, or checking your current position, the Portfolio Allocation Calculator gives you a reliable number to work from. Always revisit the calculation if any input changes significantly."
    ],
    howItWorks: [
      "Enter your total portfolio in the first field.",
      "Fill in target weights, current holdings to complete the required inputs.",
      "The calculator instantly shows Target Dollar Per Asset, Over/Under Allocation, Rebalance Trades based on the formula: Target Allocation = Portfolio Value × Target Weight for each asset."
    ],
    faqs: [
      { question: "What does the Portfolio Allocation Calculator calculate?", answer: "It calculates target dollar per asset, over/under allocation, rebalance trades using the formula Target Allocation = Portfolio Value × Target Weight for each asset. The inputs required are total portfolio, target weights, current holdings." },
      { question: "What inputs do I need for the Portfolio Allocation Calculator?", answer: "You need: Total Portfolio; Target Weights; Current Holdings. Use accurate figures from your actual situation for the most useful result." },
      { question: "How accurate are the results?", answer: "Results are mathematically precise given the inputs you provide. The formula used is: Target Allocation = Portfolio Value × Target Weight for each asset. Accuracy depends on how precise your input values are — estimates work for planning, but use exact figures for final decisions." },
    ],
    relatedSlugs: ["investment-compound-interest-calculator", "investment-investment-growth-calculator", "investment-dollar-cost-averaging-calculator", "investment-future-value-calculator"],
  },
  {
    slug: "investment-dollar-cost-averaging-calculator",
    variant: "dollar-cost-averaging",
    title: "Dollar Cost Averaging Calculator",
    topic: "Dollar Cost Averaging",
    categorySlug: "investment",
    categoryName: "Investment",
    formulaType: "compound",
    formula: "Average Cost = Total Invested / Total Shares Purchased",
    inputs: ["Periodic Investment", "Share Prices", "Number Of Periods"],
    outputs: ["Average Share Cost", "Total Shares", "Invested Amount"],
    longTailKeyword: "dollar cost averaging investment calculator returns growth",
    metaDescription: "Calculate your average share cost from periodic purchases at different prices. See how DCA reduces average cost versus lump-sum investing in volatile markets.",
    intro: "Calculate your average share cost from periodic purchases at different prices. Enter your periodic investment and get average share cost and total shares instantly — no spreadsheet required.",
    summary: "Calculate your average share cost from periodic purchases at different prices.",
    article: [
      "The Dollar Cost Averaging Calculator works by applying the formula: Average Cost = Total Invested / Total Shares Purchased. Each input plays a distinct role — small changes to periodic investment can shift average share cost significantly, which is why running multiple scenarios before making a decision is valuable.",
      "To use this calculator effectively, gather accurate values for Periodic Investment, Share Prices, Number Of Periods. Estimates are fine for exploration, but the more precise your inputs, the more actionable the output. The calculator instantly returns Average Share Cost, Total Shares, Invested Amount, giving you a clear picture of where you stand.",
      "This type of investment calculation is commonly used in real planning scenarios — not just academic exercises. Whether you are comparing options, setting a target, or checking your current position, the Dollar Cost Averaging Calculator gives you a reliable number to work from. Always revisit the calculation if any input changes significantly."
    ],
    howItWorks: [
      "Enter your periodic investment in the first field.",
      "Fill in share prices, number of periods to complete the required inputs.",
      "The calculator instantly shows Average Share Cost, Total Shares, Invested Amount based on the formula: Average Cost = Total Invested / Total Shares Purchased."
    ],
    faqs: [
      { question: "What does the Dollar Cost Averaging Calculator calculate?", answer: "It calculates average share cost, total shares, invested amount using the formula Average Cost = Total Invested / Total Shares Purchased. The inputs required are periodic investment, share prices, number of periods." },
      { question: "What inputs do I need for the Dollar Cost Averaging Calculator?", answer: "You need: Periodic Investment; Share Prices; Number Of Periods. Use accurate figures from your actual situation for the most useful result." },
      { question: "How accurate are the results?", answer: "Results are mathematically precise given the inputs you provide. The formula used is: Average Cost = Total Invested / Total Shares Purchased. Accuracy depends on how precise your input values are — estimates work for planning, but use exact figures for final decisions." },
    ],
    relatedSlugs: ["investment-compound-interest-calculator", "investment-investment-growth-calculator", "investment-portfolio-allocation-calculator", "investment-future-value-calculator"],
  },
  {
    slug: "investment-future-value-calculator",
    variant: "future-value",
    title: "Future Value Calculator",
    topic: "Future Value",
    categorySlug: "investment",
    categoryName: "Investment",
    formulaType: "compound",
    formula: "FV = PV(1+r)^n + PMT × [((1+r)^n - 1) / r]",
    inputs: ["Present Value", "Rate", "Periods", "Contribution"],
    outputs: ["Future Value", "Total Deposits", "Total Growth"],
    longTailKeyword: "future value investment calculator returns growth",
    metaDescription: "Calculate the future value of any lump sum or series of payments at a given return rate. Project any investment or savings scenario over any time horizon.",
    intro: "Calculate the future value of any lump sum or series of payments at a given return rate. Enter your present value and get future value and total deposits instantly — no spreadsheet required.",
    summary: "Calculate the future value of any lump sum or series of payments at a given return rate.",
    article: [
      "The Future Value Calculator works by applying the formula: FV = PV(1+r)^n + PMT × [((1+r)^n - 1) / r]. Each input plays a distinct role — small changes to present value can shift future value significantly, which is why running multiple scenarios before making a decision is valuable.",
      "To use this calculator effectively, gather accurate values for Present Value, Rate, Periods, Contribution. Estimates are fine for exploration, but the more precise your inputs, the more actionable the output. The calculator instantly returns Future Value, Total Deposits, Total Growth, giving you a clear picture of where you stand.",
      "This type of investment calculation is commonly used in real planning scenarios — not just academic exercises. Whether you are comparing options, setting a target, or checking your current position, the Future Value Calculator gives you a reliable number to work from. Always revisit the calculation if any input changes significantly."
    ],
    howItWorks: [
      "Enter your present value in the first field.",
      "Fill in rate, periods to complete the required inputs.",
      "The calculator instantly shows Future Value, Total Deposits, Total Growth based on the formula: FV = PV(1+r)^n + PMT × [((1+r)^n - 1) / r]."
    ],
    faqs: [
      { question: "What does the Future Value Calculator calculate?", answer: "It calculates future value, total deposits, total growth using the formula FV = PV(1+r)^n + PMT × [((1+r)^n - 1) / r]. The inputs required are present value, rate, periods, contribution." },
      { question: "What inputs do I need for the Future Value Calculator?", answer: "You need: Present Value; Rate; Periods; Contribution. Use accurate figures from your actual situation for the most useful result." },
      { question: "How accurate are the results?", answer: "Results are mathematically precise given the inputs you provide. The formula used is: FV = PV(1+r)^n + PMT × [((1+r)^n - 1) / r]. Accuracy depends on how precise your input values are — estimates work for planning, but use exact figures for final decisions." },
    ],
    relatedSlugs: ["investment-compound-interest-calculator", "investment-investment-growth-calculator", "investment-portfolio-allocation-calculator", "investment-dollar-cost-averaging-calculator"],
  },
  {
    slug: "investment-present-value-calculator",
    variant: "present-value",
    title: "Present Value Calculator",
    topic: "Present Value",
    categorySlug: "investment",
    categoryName: "Investment",
    formulaType: "compound",
    formula: "PV = FV / (1 + r)^n",
    inputs: ["Future Amount", "Discount Rate", "Years", "Payments"],
    outputs: ["Present Value", "Discount Amount", "Implied Growth"],
    longTailKeyword: "present value investment calculator returns growth",
    metaDescription: "Find what any future sum is worth in today's dollars using a discount rate. Compare future cash flows on an equal present-value basis for any decision.",
    intro: "Find what any future sum is worth in today's dollars using a discount rate. Enter your future amount and get present value and discount amount instantly — no spreadsheet required.",
    summary: "Find what any future sum is worth in today's dollars using a discount rate.",
    article: [
      "The Present Value Calculator works by applying the formula: PV = FV / (1 + r)^n. Each input plays a distinct role — small changes to future amount can shift present value significantly, which is why running multiple scenarios before making a decision is valuable.",
      "To use this calculator effectively, gather accurate values for Future Amount, Discount Rate, Years, Payments. Estimates are fine for exploration, but the more precise your inputs, the more actionable the output. The calculator instantly returns Present Value, Discount Amount, Implied Growth, giving you a clear picture of where you stand.",
      "This type of investment calculation is commonly used in real planning scenarios — not just academic exercises. Whether you are comparing options, setting a target, or checking your current position, the Present Value Calculator gives you a reliable number to work from. Always revisit the calculation if any input changes significantly."
    ],
    howItWorks: [
      "Enter your future amount in the first field.",
      "Fill in discount rate, years to complete the required inputs.",
      "The calculator instantly shows Present Value, Discount Amount, Implied Growth based on the formula: PV = FV / (1 + r)^n."
    ],
    faqs: [
      { question: "What does the Present Value Calculator calculate?", answer: "It calculates present value, discount amount, implied growth using the formula PV = FV / (1 + r)^n. The inputs required are future amount, discount rate, years, payments." },
      { question: "What inputs do I need for the Present Value Calculator?", answer: "You need: Future Amount; Discount Rate; Years; Payments. Use accurate figures from your actual situation for the most useful result." },
      { question: "How accurate are the results?", answer: "Results are mathematically precise given the inputs you provide. The formula used is: PV = FV / (1 + r)^n. Accuracy depends on how precise your input values are — estimates work for planning, but use exact figures for final decisions." },
    ],
    relatedSlugs: ["investment-compound-interest-calculator", "investment-investment-growth-calculator", "investment-portfolio-allocation-calculator", "investment-dollar-cost-averaging-calculator"],
  },
  {
    slug: "investment-dividend-reinvestment-calculator",
    variant: "dividend-reinvestment",
    title: "Dividend Reinvestment Calculator",
    topic: "Dividend Reinvestment",
    categorySlug: "investment",
    categoryName: "Investment",
    formulaType: "compound",
    formula: "Reinvested Shares = Dividends / Share Price; Portfolio grows by added shares each period",
    inputs: ["Shares Owned", "Dividend Yield", "Share Price", "Reinvestment Rate"],
    outputs: ["New Shares", "Dividend Income", "Ending Value"],
    longTailKeyword: "dividend reinvestment investment calculator returns growth",
    metaDescription: "Calculate portfolio growth when dividends are reinvested to purchase additional shares. See new shares added, cumulative dividends, and ending portfolio value.",
    intro: "Calculate portfolio growth when dividends are reinvested to purchase additional shares. Enter your shares owned and get new shares and dividend income instantly — no spreadsheet required.",
    summary: "Calculate portfolio growth when dividends are reinvested to purchase additional shares.",
    article: [
      "The Dividend Reinvestment Calculator works by applying the formula: Reinvested Shares = Dividends / Share Price; Portfolio grows by added shares each period. Each input plays a distinct role — small changes to shares owned can shift new shares significantly, which is why running multiple scenarios before making a decision is valuable.",
      "To use this calculator effectively, gather accurate values for Shares Owned, Dividend Yield, Share Price, Reinvestment Rate. Estimates are fine for exploration, but the more precise your inputs, the more actionable the output. The calculator instantly returns New Shares, Dividend Income, Ending Value, giving you a clear picture of where you stand.",
      "This type of investment calculation is commonly used in real planning scenarios — not just academic exercises. Whether you are comparing options, setting a target, or checking your current position, the Dividend Reinvestment Calculator gives you a reliable number to work from. Always revisit the calculation if any input changes significantly."
    ],
    howItWorks: [
      "Enter your shares owned in the first field.",
      "Fill in dividend yield, share price to complete the required inputs.",
      "The calculator instantly shows New Shares, Dividend Income, Ending Value based on the formula: Reinvested Shares = Dividends / Share Price; Portfolio grows by added shares each period."
    ],
    faqs: [
      { question: "What does the Dividend Reinvestment Calculator calculate?", answer: "It calculates new shares, dividend income, ending value using the formula Reinvested Shares = Dividends / Share Price; Portfolio grows by added shares each period. The inputs required are shares owned, dividend yield, share price, reinvestment rate." },
      { question: "What inputs do I need for the Dividend Reinvestment Calculator?", answer: "You need: Shares Owned; Dividend Yield; Share Price; Reinvestment Rate. Use accurate figures from your actual situation for the most useful result." },
      { question: "How accurate are the results?", answer: "Results are mathematically precise given the inputs you provide. The formula used is: Reinvested Shares = Dividends / Share Price; Portfolio grows by added shares each period. Accuracy depends on how precise your input values are — estimates work for planning, but use exact figures for final decisions." },
    ],
    relatedSlugs: ["investment-compound-interest-calculator", "investment-investment-growth-calculator", "investment-portfolio-allocation-calculator", "investment-dollar-cost-averaging-calculator"],
  },
  {
    slug: "investment-mutual-fund-fee-calculator",
    variant: "mutual-fund-fee",
    title: "Mutual Fund Fee Calculator",
    topic: "Mutual Fund Fee",
    categorySlug: "investment",
    categoryName: "Investment",
    formulaType: "percentage",
    formula: "Fee Drag = Balance × Expense Ratio; Total fee over time compounds against returns",
    inputs: ["Investment Balance", "Expense Ratio", "Years", "Contribution"],
    outputs: ["Annual Fee", "Lifetime Fee Drag", "Net Ending Value"],
    longTailKeyword: "mutual fund fee investment calculator returns growth",
    metaDescription: "Calculate the long-term cost of mutual fund expense ratios on any balance. See annual fees, lifetime fee drag, and net return versus a low-cost alternative.",
    intro: "Calculate the long-term cost of mutual fund expense ratios on any balance. Enter your investment balance and get annual fee and lifetime fee drag instantly — no spreadsheet required.",
    summary: "Calculate the long-term cost of mutual fund expense ratios on any balance.",
    article: [
      "The Mutual Fund Fee Calculator works by applying the formula: Fee Drag = Balance × Expense Ratio; Total fee over time compounds against returns. Each input plays a distinct role — small changes to investment balance can shift annual fee significantly, which is why running multiple scenarios before making a decision is valuable.",
      "To use this calculator effectively, gather accurate values for Investment Balance, Expense Ratio, Years, Contribution. Estimates are fine for exploration, but the more precise your inputs, the more actionable the output. The calculator instantly returns Annual Fee, Lifetime Fee Drag, Net Ending Value, giving you a clear picture of where you stand.",
      "This type of investment calculation is commonly used in real planning scenarios — not just academic exercises. Whether you are comparing options, setting a target, or checking your current position, the Mutual Fund Fee Calculator gives you a reliable number to work from. Always revisit the calculation if any input changes significantly."
    ],
    howItWorks: [
      "Enter your investment balance in the first field.",
      "Fill in expense ratio, years to complete the required inputs.",
      "The calculator instantly shows Annual Fee, Lifetime Fee Drag, Net Ending Value based on the formula: Fee Drag = Balance × Expense Ratio; Total fee over time compounds against returns."
    ],
    faqs: [
      { question: "What does the Mutual Fund Fee Calculator calculate?", answer: "It calculates annual fee, lifetime fee drag, net ending value using the formula Fee Drag = Balance × Expense Ratio; Total fee over time compounds against returns. The inputs required are investment balance, expense ratio, years, contribution." },
      { question: "What inputs do I need for the Mutual Fund Fee Calculator?", answer: "You need: Investment Balance; Expense Ratio; Years; Contribution. Use accurate figures from your actual situation for the most useful result." },
      { question: "How accurate are the results?", answer: "Results are mathematically precise given the inputs you provide. The formula used is: Fee Drag = Balance × Expense Ratio; Total fee over time compounds against returns. Accuracy depends on how precise your input values are — estimates work for planning, but use exact figures for final decisions." },
    ],
    relatedSlugs: ["investment-compound-interest-calculator", "investment-investment-growth-calculator", "investment-portfolio-allocation-calculator", "investment-dollar-cost-averaging-calculator"],
  },
  {
    slug: "investment-etf-expense-calculator",
    variant: "etf-expense",
    title: "ETF Expense Calculator",
    topic: "ETF Expense",
    categorySlug: "investment",
    categoryName: "Investment",
    formulaType: "percentage",
    formula: "Annual ETF Fee = ETF Balance × Expense Ratio",
    inputs: ["Etf Balance", "Expense Ratio", "Years"],
    outputs: ["Annual Fee", "Cumulative Fee", "Net Return After Fees"],
    longTailKeyword: "etf expense investment calculator returns growth",
    metaDescription: "Calculate the true cost of ETF expense ratios over any holding period. Compare annual fee, cumulative drag, and net return versus a zero-expense benchmark.",
    intro: "Calculate the true cost of ETF expense ratios over any holding period. Enter your etf balance and get annual fee and cumulative fee instantly — no spreadsheet required.",
    summary: "Calculate the true cost of ETF expense ratios over any holding period.",
    article: [
      "The ETF Expense Calculator works by applying the formula: Annual ETF Fee = ETF Balance × Expense Ratio. Each input plays a distinct role — small changes to etf balance can shift annual fee significantly, which is why running multiple scenarios before making a decision is valuable.",
      "To use this calculator effectively, gather accurate values for Etf Balance, Expense Ratio, Years. Estimates are fine for exploration, but the more precise your inputs, the more actionable the output. The calculator instantly returns Annual Fee, Cumulative Fee, Net Return After Fees, giving you a clear picture of where you stand.",
      "This type of investment calculation is commonly used in real planning scenarios — not just academic exercises. Whether you are comparing options, setting a target, or checking your current position, the ETF Expense Calculator gives you a reliable number to work from. Always revisit the calculation if any input changes significantly."
    ],
    howItWorks: [
      "Enter your etf balance in the first field.",
      "Fill in expense ratio, years to complete the required inputs.",
      "The calculator instantly shows Annual Fee, Cumulative Fee, Net Return After Fees based on the formula: Annual ETF Fee = ETF Balance × Expense Ratio."
    ],
    faqs: [
      { question: "What does the ETF Expense Calculator calculate?", answer: "It calculates annual fee, cumulative fee, net return after fees using the formula Annual ETF Fee = ETF Balance × Expense Ratio. The inputs required are etf balance, expense ratio, years." },
      { question: "What inputs do I need for the ETF Expense Calculator?", answer: "You need: Etf Balance; Expense Ratio; Years. Use accurate figures from your actual situation for the most useful result." },
      { question: "How accurate are the results?", answer: "Results are mathematically precise given the inputs you provide. The formula used is: Annual ETF Fee = ETF Balance × Expense Ratio. Accuracy depends on how precise your input values are — estimates work for planning, but use exact figures for final decisions." },
    ],
    relatedSlugs: ["investment-compound-interest-calculator", "investment-investment-growth-calculator", "investment-portfolio-allocation-calculator", "investment-dollar-cost-averaging-calculator"],
  },
  {
    slug: "investment-asset-allocation-rebalancer-calculator",
    variant: "asset-allocation-rebalancer",
    title: "Asset Allocation Rebalancer Calculator",
    topic: "Asset Allocation Rebalancer",
    categorySlug: "investment",
    categoryName: "Investment",
    formulaType: "ratio",
    formula: "Trade Amount_i = Target Value_i - Current Value_i",
    inputs: ["Total Portfolio", "Current Weights", "Target Weights"],
    outputs: ["Buy/Sell Amounts", "New Weights", "Rebalance Drift"],
    longTailKeyword: "asset allocation rebalancer investment calculator returns growth",
    metaDescription: "Calculate exact buy and sell amounts needed to rebalance any portfolio to target weights. See drift from targets and required rebalancing trades.",
    intro: "Calculate exact buy and sell amounts needed to rebalance any portfolio to target weights. Enter your total portfolio and get buy/sell amounts and new weights instantly — no spreadsheet required.",
    summary: "Calculate exact buy and sell amounts needed to rebalance any portfolio to target weights.",
    article: [
      "The Asset Allocation Rebalancer Calculator works by applying the formula: Trade Amount_i = Target Value_i - Current Value_i. Each input plays a distinct role — small changes to total portfolio can shift buy/sell amounts significantly, which is why running multiple scenarios before making a decision is valuable.",
      "To use this calculator effectively, gather accurate values for Total Portfolio, Current Weights, Target Weights. Estimates are fine for exploration, but the more precise your inputs, the more actionable the output. The calculator instantly returns Buy/Sell Amounts, New Weights, Rebalance Drift, giving you a clear picture of where you stand.",
      "This type of investment calculation is commonly used in real planning scenarios — not just academic exercises. Whether you are comparing options, setting a target, or checking your current position, the Asset Allocation Rebalancer Calculator gives you a reliable number to work from. Always revisit the calculation if any input changes significantly."
    ],
    howItWorks: [
      "Enter your total portfolio in the first field.",
      "Fill in current weights, target weights to complete the required inputs.",
      "The calculator instantly shows Buy/Sell Amounts, New Weights, Rebalance Drift based on the formula: Trade Amount_i = Target Value_i - Current Value_i."
    ],
    faqs: [
      { question: "What does the Asset Allocation Rebalancer Calculator calculate?", answer: "It calculates buy/sell amounts, new weights, rebalance drift using the formula Trade Amount_i = Target Value_i - Current Value_i. The inputs required are total portfolio, current weights, target weights." },
      { question: "What inputs do I need for the Asset Allocation Rebalancer Calculator?", answer: "You need: Total Portfolio; Current Weights; Target Weights. Use accurate figures from your actual situation for the most useful result." },
      { question: "How accurate are the results?", answer: "Results are mathematically precise given the inputs you provide. The formula used is: Trade Amount_i = Target Value_i - Current Value_i. Accuracy depends on how precise your input values are — estimates work for planning, but use exact figures for final decisions." },
    ],
    relatedSlugs: ["investment-compound-interest-calculator", "investment-investment-growth-calculator", "investment-portfolio-allocation-calculator", "investment-dollar-cost-averaging-calculator"],
  },
  {
    slug: "investment-investment-return-calculator",
    variant: "investment-return",
    title: "Investment Return Calculator",
    topic: "Investment Return",
    categorySlug: "investment",
    categoryName: "Investment",
    formulaType: "percentage",
    formula: "Return = (Final Value + Distributions - Initial Investment - Fees) / Initial Investment × 100",
    inputs: ["Initial Investment", "Final Value", "Income/Distributions", "Fees"],
    outputs: ["Total Return %", "Net Profit", "Annualized Return"],
    longTailKeyword: "investment return investment calculator returns growth",
    metaDescription: "Calculate total return percentage on any investment including distributions and fees. Find net profit and annualized return for any holding period.",
    intro: "Calculate total return percentage on any investment including distributions and fees. Enter your initial investment and get total return % and net profit instantly — no spreadsheet required.",
    summary: "Calculate total return percentage on any investment including distributions and fees.",
    article: [
      "The Investment Return Calculator works by applying the formula: Return = (Final Value + Distributions - Initial Investment - Fees) / Initial Investment × 100. Each input plays a distinct role — small changes to initial investment can shift total return % significantly, which is why running multiple scenarios before making a decision is valuable.",
      "To use this calculator effectively, gather accurate values for Initial Investment, Final Value, Income/Distributions, Fees. Estimates are fine for exploration, but the more precise your inputs, the more actionable the output. The calculator instantly returns Total Return %, Net Profit, Annualized Return, giving you a clear picture of where you stand.",
      "This type of investment calculation is commonly used in real planning scenarios — not just academic exercises. Whether you are comparing options, setting a target, or checking your current position, the Investment Return Calculator gives you a reliable number to work from. Always revisit the calculation if any input changes significantly."
    ],
    howItWorks: [
      "Enter your initial investment in the first field.",
      "Fill in final value, income/distributions to complete the required inputs.",
      "The calculator instantly shows Total Return %, Net Profit, Annualized Return based on the formula: Return = (Final Value + Distributions - Initial Investment - Fees) / Initial Investment × 100."
    ],
    faqs: [
      { question: "What does the Investment Return Calculator calculate?", answer: "It calculates total return %, net profit, annualized return using the formula Return = (Final Value + Distributions - Initial Investment - Fees) / Initial Investment × 100. The inputs required are initial investment, final value, income/distributions, fees." },
      { question: "What inputs do I need for the Investment Return Calculator?", answer: "You need: Initial Investment; Final Value; Income/Distributions; Fees. Use accurate figures from your actual situation for the most useful result." },
      { question: "How accurate are the results?", answer: "Results are mathematically precise given the inputs you provide. The formula used is: Return = (Final Value + Distributions - Initial Investment - Fees) / Initial Investment × 100. Accuracy depends on how precise your input values are — estimates work for planning, but use exact figures for final decisions." },
    ],
    relatedSlugs: ["investment-compound-interest-calculator", "investment-investment-growth-calculator", "investment-portfolio-allocation-calculator", "investment-dollar-cost-averaging-calculator"],
  },
  {
    slug: "investment-risk-vs-return-calculator",
    variant: "risk-vs-return",
    title: "Risk vs Return Calculator",
    topic: "Risk vs Return",
    categorySlug: "investment",
    categoryName: "Investment",
    formulaType: "ratio",
    formula: "Risk-adjusted return = Expected Return / Volatility (with downside penalty optional)",
    inputs: ["Expected Return", "Volatility", "Downside Risk", "Benchmark"],
    outputs: ["Risk Score", "Return Score", "Risk-Adjusted Ranking"],
    longTailKeyword: "risk vs return investment calculator returns growth",
    metaDescription: "Score any investment by its risk-adjusted return. Compare expected return against volatility and downside risk to rank options on a level playing field.",
    intro: "Score any investment by its risk-adjusted return. Enter your expected return and get risk score and return score instantly — no spreadsheet required.",
    summary: "Score any investment by its risk-adjusted return.",
    article: [
      "The Risk vs Return Calculator works by applying the formula: Risk-adjusted return = Expected Return / Volatility (with downside penalty optional). Each input plays a distinct role — small changes to expected return can shift risk score significantly, which is why running multiple scenarios before making a decision is valuable.",
      "To use this calculator effectively, gather accurate values for Expected Return, Volatility, Downside Risk, Benchmark. Estimates are fine for exploration, but the more precise your inputs, the more actionable the output. The calculator instantly returns Risk Score, Return Score, Risk-Adjusted Ranking, giving you a clear picture of where you stand.",
      "This type of investment calculation is commonly used in real planning scenarios — not just academic exercises. Whether you are comparing options, setting a target, or checking your current position, the Risk vs Return Calculator gives you a reliable number to work from. Always revisit the calculation if any input changes significantly."
    ],
    howItWorks: [
      "Enter your expected return in the first field.",
      "Fill in volatility, downside risk to complete the required inputs.",
      "The calculator instantly shows Risk Score, Return Score, Risk-Adjusted Ranking based on the formula: Risk-adjusted return = Expected Return / Volatility (with downside penalty optional)."
    ],
    faqs: [
      { question: "What does the Risk vs Return Calculator calculate?", answer: "It calculates risk score, return score, risk-adjusted ranking using the formula Risk-adjusted return = Expected Return / Volatility (with downside penalty optional). The inputs required are expected return, volatility, downside risk, benchmark." },
      { question: "What inputs do I need for the Risk vs Return Calculator?", answer: "You need: Expected Return; Volatility; Downside Risk; Benchmark. Use accurate figures from your actual situation for the most useful result." },
      { question: "How accurate are the results?", answer: "Results are mathematically precise given the inputs you provide. The formula used is: Risk-adjusted return = Expected Return / Volatility (with downside penalty optional). Accuracy depends on how precise your input values are — estimates work for planning, but use exact figures for final decisions." },
    ],
    relatedSlugs: ["investment-compound-interest-calculator", "investment-investment-growth-calculator", "investment-portfolio-allocation-calculator", "investment-dollar-cost-averaging-calculator"],
  },
  {
    slug: "investment-stock-profit-calculator",
    variant: "stock-profit",
    title: "Stock Profit Calculator",
    topic: "Stock Profit",
    categorySlug: "investment",
    categoryName: "Investment",
    formulaType: "percentage",
    formula: "Profit = (Sell Price - Buy Price) × Shares - Fees",
    inputs: ["Buy Price", "Sell Price", "Shares", "Fees"],
    outputs: ["Gross Profit", "Net Profit", "Return %"],
    longTailKeyword: "stock profit investment calculator returns growth",
    metaDescription: "Calculate gross and net profit from any stock trade. Enter buy price, sell price, shares, and fees to see your exact return percentage and dollar gain.",
    intro: "Calculate gross and net profit from any stock trade. Enter your buy price and get gross profit and net profit instantly — no spreadsheet required.",
    summary: "Calculate gross and net profit from any stock trade.",
    article: [
      "The Stock Profit Calculator works by applying the formula: Profit = (Sell Price - Buy Price) × Shares - Fees. Each input plays a distinct role — small changes to buy price can shift gross profit significantly, which is why running multiple scenarios before making a decision is valuable.",
      "To use this calculator effectively, gather accurate values for Buy Price, Sell Price, Shares, Fees. Estimates are fine for exploration, but the more precise your inputs, the more actionable the output. The calculator instantly returns Gross Profit, Net Profit, Return %, giving you a clear picture of where you stand.",
      "This type of investment calculation is commonly used in real planning scenarios — not just academic exercises. Whether you are comparing options, setting a target, or checking your current position, the Stock Profit Calculator gives you a reliable number to work from. Always revisit the calculation if any input changes significantly."
    ],
    howItWorks: [
      "Enter your buy price in the first field.",
      "Fill in sell price, shares to complete the required inputs.",
      "The calculator instantly shows Gross Profit, Net Profit, Return % based on the formula: Profit = (Sell Price - Buy Price) × Shares - Fees."
    ],
    faqs: [
      { question: "What does the Stock Profit Calculator calculate?", answer: "It calculates gross profit, net profit, return % using the formula Profit = (Sell Price - Buy Price) × Shares - Fees. The inputs required are buy price, sell price, shares, fees." },
      { question: "What inputs do I need for the Stock Profit Calculator?", answer: "You need: Buy Price; Sell Price; Shares; Fees. Use accurate figures from your actual situation for the most useful result." },
      { question: "How accurate are the results?", answer: "Results are mathematically precise given the inputs you provide. The formula used is: Profit = (Sell Price - Buy Price) × Shares - Fees. Accuracy depends on how precise your input values are — estimates work for planning, but use exact figures for final decisions." },
    ],
    relatedSlugs: ["investment-compound-interest-calculator", "investment-investment-growth-calculator", "investment-portfolio-allocation-calculator", "investment-dollar-cost-averaging-calculator"],
  },
  {
    slug: "investment-capital-gains-calculator",
    variant: "capital-gains",
    title: "Capital Gains Calculator",
    topic: "Capital Gains",
    categorySlug: "investment",
    categoryName: "Investment",
    formulaType: "tax",
    formula: "Capital Gain = Sale Proceeds - Cost Basis - Fees",
    inputs: ["Sale Price", "Cost Basis", "Holding Period", "Fees"],
    outputs: ["Realized Gain", "Taxable Gain", "Gain %"],
    longTailKeyword: "capital gains investment calculator returns growth",
    metaDescription: "Calculate realized capital gain from any asset sale. Separate short-term from long-term gains and see the taxable amount for any investment transaction.",
    intro: "Calculate realized capital gain from any asset sale. Enter your sale price and get realized gain and taxable gain instantly — no spreadsheet required.",
    summary: "Calculate realized capital gain from any asset sale.",
    article: [
      "The Capital Gains Calculator works by applying the formula: Capital Gain = Sale Proceeds - Cost Basis - Fees. Each input plays a distinct role — small changes to sale price can shift realized gain significantly, which is why running multiple scenarios before making a decision is valuable.",
      "To use this calculator effectively, gather accurate values for Sale Price, Cost Basis, Holding Period, Fees. Estimates are fine for exploration, but the more precise your inputs, the more actionable the output. The calculator instantly returns Realized Gain, Taxable Gain, Gain %, giving you a clear picture of where you stand.",
      "This type of investment calculation is commonly used in real planning scenarios — not just academic exercises. Whether you are comparing options, setting a target, or checking your current position, the Capital Gains Calculator gives you a reliable number to work from. Always revisit the calculation if any input changes significantly."
    ],
    howItWorks: [
      "Enter your sale price in the first field.",
      "Fill in cost basis, holding period to complete the required inputs.",
      "The calculator instantly shows Realized Gain, Taxable Gain, Gain % based on the formula: Capital Gain = Sale Proceeds - Cost Basis - Fees."
    ],
    faqs: [
      { question: "What does the Capital Gains Calculator calculate?", answer: "It calculates realized gain, taxable gain, gain % using the formula Capital Gain = Sale Proceeds - Cost Basis - Fees. The inputs required are sale price, cost basis, holding period, fees." },
      { question: "What inputs do I need for the Capital Gains Calculator?", answer: "You need: Sale Price; Cost Basis; Holding Period; Fees. Use accurate figures from your actual situation for the most useful result." },
      { question: "How accurate are the results?", answer: "Results are mathematically precise given the inputs you provide. The formula used is: Capital Gain = Sale Proceeds - Cost Basis - Fees. Accuracy depends on how precise your input values are — estimates work for planning, but use exact figures for final decisions." },
    ],
    relatedSlugs: ["investment-compound-interest-calculator", "investment-investment-growth-calculator", "investment-portfolio-allocation-calculator", "investment-dollar-cost-averaging-calculator"],
  },
  {
    slug: "investment-inflation-adjusted-return-calculator",
    variant: "inflation-adjusted-return",
    title: "Inflation Adjusted Return Calculator",
    topic: "Inflation Adjusted Return",
    categorySlug: "investment",
    categoryName: "Investment",
    formulaType: "growth",
    formula: "Real Return = ((1 + Nominal Return) / (1 + Inflation Rate)) - 1",
    inputs: ["Nominal Return", "Inflation Rate"],
    outputs: ["Real Return %", "Purchasing Power Change", "Inflation Drag"],
    longTailKeyword: "inflation adjusted return investment calculator returns growth",
    metaDescription: "Calculate the real inflation-adjusted return on any investment. Use the Fisher equation to find true purchasing power growth after accounting for inflation.",
    intro: "Calculate the real inflation-adjusted return on any investment. Enter your nominal return and get real return % and purchasing power change instantly — no spreadsheet required.",
    summary: "Calculate the real inflation-adjusted return on any investment.",
    article: [
      "The Inflation Adjusted Return Calculator works by applying the formula: Real Return = ((1 + Nominal Return) / (1 + Inflation Rate)) - 1. Each input plays a distinct role — small changes to nominal return can shift real return % significantly, which is why running multiple scenarios before making a decision is valuable.",
      "To use this calculator effectively, gather accurate values for Nominal Return, Inflation Rate. Estimates are fine for exploration, but the more precise your inputs, the more actionable the output. The calculator instantly returns Real Return %, Purchasing Power Change, Inflation Drag, giving you a clear picture of where you stand.",
      "This type of investment calculation is commonly used in real planning scenarios — not just academic exercises. Whether you are comparing options, setting a target, or checking your current position, the Inflation Adjusted Return Calculator gives you a reliable number to work from. Always revisit the calculation if any input changes significantly."
    ],
    howItWorks: [
      "Enter your nominal return in the first field.",
      "Fill in inflation rate to complete the required inputs.",
      "The calculator instantly shows Real Return %, Purchasing Power Change, Inflation Drag based on the formula: Real Return = ((1 + Nominal Return) / (1 + Inflation Rate)) - 1."
    ],
    faqs: [
      { question: "What does the Inflation Adjusted Return Calculator calculate?", answer: "It calculates real return %, purchasing power change, inflation drag using the formula Real Return = ((1 + Nominal Return) / (1 + Inflation Rate)) - 1. The inputs required are nominal return, inflation rate." },
      { question: "What inputs do I need for the Inflation Adjusted Return Calculator?", answer: "You need: Nominal Return; Inflation Rate. Use accurate figures from your actual situation for the most useful result." },
      { question: "How accurate are the results?", answer: "Results are mathematically precise given the inputs you provide. The formula used is: Real Return = ((1 + Nominal Return) / (1 + Inflation Rate)) - 1. Accuracy depends on how precise your input values are — estimates work for planning, but use exact figures for final decisions." },
    ],
    relatedSlugs: ["investment-compound-interest-calculator", "investment-investment-growth-calculator", "investment-portfolio-allocation-calculator", "investment-dollar-cost-averaging-calculator"],
  },
  {
    slug: "investment-retirement-portfolio-projection-calculator",
    variant: "retirement-portfolio-projection",
    title: "Retirement Portfolio Projection Calculator",
    topic: "Retirement Portfolio Projection",
    categorySlug: "investment",
    categoryName: "Investment",
    formulaType: "compound",
    formula: "Projected Portfolio = current balance compounded + recurring contributions - planned withdrawals",
    inputs: ["Current Portfolio", "Contributions", "Return Rate", "Years", "Withdrawal Rate"],
    outputs: ["Retirement Balance", "Income Capacity", "Shortfall"],
    longTailKeyword: "retirement portfolio projection investment calculator returns growth",
    metaDescription: "Project retirement portfolio value from current balance, contributions, and return rate. See if you are on track to retire on time at your target income.",
    intro: "Project retirement portfolio value from current balance, contributions, and return rate. Enter your current portfolio and get retirement balance and income capacity instantly — no spreadsheet required.",
    summary: "Project retirement portfolio value from current balance, contributions, and return rate.",
    article: [
      "The Retirement Portfolio Projection Calculator works by applying the formula: Projected Portfolio = current balance compounded + recurring contributions - planned withdrawals. Each input plays a distinct role — small changes to current portfolio can shift retirement balance significantly, which is why running multiple scenarios before making a decision is valuable.",
      "To use this calculator effectively, gather accurate values for Current Portfolio, Contributions, Return Rate, Years. Estimates are fine for exploration, but the more precise your inputs, the more actionable the output. The calculator instantly returns Retirement Balance, Income Capacity, Shortfall, giving you a clear picture of where you stand.",
      "This type of investment calculation is commonly used in real planning scenarios — not just academic exercises. Whether you are comparing options, setting a target, or checking your current position, the Retirement Portfolio Projection Calculator gives you a reliable number to work from. Always revisit the calculation if any input changes significantly."
    ],
    howItWorks: [
      "Enter your current portfolio in the first field.",
      "Fill in contributions, return rate to complete the required inputs.",
      "The calculator instantly shows Retirement Balance, Income Capacity, Shortfall based on the formula: Projected Portfolio = current balance compounded + recurring contributions - planned withdrawals."
    ],
    faqs: [
      { question: "What does the Retirement Portfolio Projection Calculator calculate?", answer: "It calculates retirement balance, income capacity, shortfall using the formula Projected Portfolio = current balance compounded + recurring contributions - planned withdrawals. The inputs required are current portfolio, contributions, return rate, years." },
      { question: "What inputs do I need for the Retirement Portfolio Projection Calculator?", answer: "You need: Current Portfolio; Contributions; Return Rate; Years; Withdrawal Rate. Use accurate figures from your actual situation for the most useful result." },
      { question: "How accurate are the results?", answer: "Results are mathematically precise given the inputs you provide. The formula used is: Projected Portfolio = current balance compounded + recurring contributions - planned withdrawals. Accuracy depends on how precise your input values are — estimates work for planning, but use exact figures for final decisions." },
    ],
    relatedSlugs: ["investment-compound-interest-calculator", "investment-investment-growth-calculator", "investment-portfolio-allocation-calculator", "investment-dollar-cost-averaging-calculator"],
  },
  {
    slug: "investment-sip-calculator",
    variant: "sip",
    title: "SIP Calculator",
    topic: "SIP",
    categorySlug: "investment",
    categoryName: "Investment",
    formulaType: "compound",
    formula: "FV = PMT × [((1+r)^n - 1) / r] where PMT is the monthly SIP contribution",
    inputs: ["Monthly Sip", "Expected Return", "Years"],
    outputs: ["Future Value", "Total Invested", "Wealth Created"],
    longTailKeyword: "sip investment calculator returns growth",
    metaDescription: "Calculate the future value of a systematic investment plan with fixed monthly contributions. See total wealth created versus total invested at any rate and t...",
    intro: "Calculate the future value of a systematic investment plan with fixed monthly contributions. Enter your monthly sip and get future value and total invested instantly — no spreadsheet required.",
    summary: "Calculate the future value of a systematic investment plan with fixed monthly contributions.",
    article: [
      "The SIP Calculator works by applying the formula: FV = PMT × [((1+r)^n - 1) / r] where PMT is the monthly SIP contribution. Each input plays a distinct role — small changes to monthly sip can shift future value significantly, which is why running multiple scenarios before making a decision is valuable.",
      "To use this calculator effectively, gather accurate values for Monthly Sip, Expected Return, Years. Estimates are fine for exploration, but the more precise your inputs, the more actionable the output. The calculator instantly returns Future Value, Total Invested, Wealth Created, giving you a clear picture of where you stand.",
      "This type of investment calculation is commonly used in real planning scenarios — not just academic exercises. Whether you are comparing options, setting a target, or checking your current position, the SIP Calculator gives you a reliable number to work from. Always revisit the calculation if any input changes significantly."
    ],
    howItWorks: [
      "Enter your monthly sip in the first field.",
      "Fill in expected return, years to complete the required inputs.",
      "The calculator instantly shows Future Value, Total Invested, Wealth Created based on the formula: FV = PMT × [((1+r)^n - 1) / r] where PMT is the monthly SIP contribution."
    ],
    faqs: [
      { question: "What does the SIP Calculator calculate?", answer: "It calculates future value, total invested, wealth created using the formula FV = PMT × [((1+r)^n - 1) / r] where PMT is the monthly SIP contribution. The inputs required are monthly sip, expected return, years." },
      { question: "What inputs do I need for the SIP Calculator?", answer: "You need: Monthly Sip; Expected Return; Years. Use accurate figures from your actual situation for the most useful result." },
      { question: "How accurate are the results?", answer: "Results are mathematically precise given the inputs you provide. The formula used is: FV = PMT × [((1+r)^n - 1) / r] where PMT is the monthly SIP contribution. Accuracy depends on how precise your input values are — estimates work for planning, but use exact figures for final decisions." },
    ],
    relatedSlugs: ["investment-compound-interest-calculator", "investment-investment-growth-calculator", "investment-portfolio-allocation-calculator", "investment-dollar-cost-averaging-calculator"],
  }
];

export default investmentCalculators;
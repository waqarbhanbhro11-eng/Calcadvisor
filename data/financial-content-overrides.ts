// Auto-generated from calcadvisor_200_blueprints_all_fixed.xlsx
// Source sheet: Calculators
// Only Inputs, Formula, and Outputs are included here by request.

export type CalculatorFieldOverride = {
  inputs: string;
  formula: string;
  outputs: string;
longTailKeyword?: string; 
  metaDescription?: string;
  intro?: string;
  summary?: string;
  article?: string[];
  howItWorks?: string[];
  faqs?: any[];
};

export const financialContentOverrides: Record<string, CalculatorFieldOverride> = {
  "budget-planner": {
    inputs: "Monthly Income (before deductions); Fixed Expenses; Variable Expenses; Savings Target; Other Buffers",
    formula: "Surplus = Income - (Fixed expenses + Variable expenses + Savings target + Buffers)",
    outputs: "Monthly Surplus/Deficit; Savings Rate; Needs vs Wants Split",
  },
  "net-worth": {
    inputs: "Cash; Investments; Property Value; Vehicles; Loans; Credit Card Debt",
    formula: "Net Worth = Total Assets - Total Liabilities",
    outputs: "Total Assets; Total Liabilities; Net Worth",
  },
  "emergency-fund": {
    inputs: "Essential Monthly Expenses; Coverage Months; Current Savings (available cash)",
    formula: "Target Fund = Essential Monthly Expenses × Coverage Months; Gap = Target Fund - Current Savings",
    outputs: "Target Fund; Funding Gap; Runway Months",
  },
  "cash-flow": {
    inputs: "Income (before expenses); Side Income (optional); Outflows (total spending); Savings Transfer; Debt Payments",
    formula: "Net Cash Flow = (Income + Side Income) - (Outflows + Savings Transfer + Debt Payments)",
    outputs: "Net Cash Flow; Cash Flow Margin; Inflows vs Outflows",
  },
  "savings-goal": {
    inputs: "Goal Amount; Current Savings (available cash); Monthly Contribution; Annual Return; Timeline",
    formula: "Months Needed = ceil((Goal Amount - Current Savings) / Monthly Contribution) or FV-based timeline with compounding",
    outputs: "Months Needed; Target Date; Projected End Balance",
  },
  "inflation-impact": {
    inputs: "Current Value; Inflation Rate; Years",
    formula: "Future Value = Current Value × (1 + Inflation Rate)^Years",
    outputs: "Future Price; Purchasing Power Loss; Real Value Today",
  },
  "compound-growth-planner": {
    inputs: "Initial Amount; Monthly Contribution; Annual Return; Years; Compounding Frequency",
    formula: "FV = P(1 + r/n)^(n×t) + PMT × [((1 + r/n)^(n×t) - 1) / (r/n)]",
    outputs: "Future Value; Total Contributions; Total Gains",
  },
  "expense-split": {
    inputs: "Total Bill; Number Of People; Split Method; Weights Or Shares",
    formula: "Equal share = Total Bill / People; Weighted share = Total Bill × Weight_i / Sum(Weights)",
    outputs: "Per-Person Share; Who Owes What; Settlement Balance",
  },
  "commission": {
    inputs: "Sales Amount; Commission Rate; Base Salary; Bonus Threshold; Bonus Amount",
    formula: "Commission = Sales Amount × Commission Rate; Total Earnings = Base Salary + Commission + Bonus",
    outputs: "Commission Earned; Total Earnings; Effective Commission Rate",
  },
  "salary-to-hourly": {
    inputs: "Annual Salary; Hours Per Week; Weeks Per Year",
    formula: "Hourly Rate = Annual Salary / (Hours per Week × Weeks per Year)",
    outputs: "Hourly Rate; Daily Rate; Weekly Rate",
  },
  "annual-income": {
    inputs: "Hourly Rate; Hours Per Week; Weeks Per Year; Bonuses",
    formula: "Annual Income = Hourly Rate × Hours per Week × Weeks per Year + Bonuses",
    outputs: "Annual Income; Monthly Income; Weekly Income",
  },
  "dividend-reinvestment-plan": {
    inputs: "Initial Investment; Share Price; Dividend Yield; Annual Price Growth; Years; Monthly Contribution",
    formula: "Portfolio Value = Shares × Price with dividends reinvested each period; Shares grow by Dividends / Share Price",
    outputs: "Ending Portfolio Value; Total Dividends; Final Share Count",
  },
  "break-even": {
    inputs: "Fixed Costs; Selling Price Per Unit; Variable Cost Per Unit; Target Profit",
    formula: "Break-even units = Fixed Costs / (Selling Price - Variable Cost); Target units = (Fixed Costs + Target Profit) / Contribution Margin",
    outputs: "Break-Even Units; Break-Even Revenue; Profit Target Units",
  },
  "roi": {
    inputs: "Initial Investment; Final Value; Additional Costs; Holding Period Years",
    formula: "ROI = (Final Value - Initial Investment - Additional Costs) / Initial Investment × 100",
    outputs: "ROI %; Net Profit; Annualized ROI",
  },
  "monthly-spending": {
    inputs: "Rent; Groceries; Transport; Subscriptions; Eating Out; Other Categories",
    formula: "Monthly Spending = Sum of all spending categories",
    outputs: "Total Monthly Spend; Daily Average; Largest Category",
  },
  "purchase-affordability": {
    inputs: "Monthly Income (before deductions); Debt Payments; Down Payment; Interest Rate; Loan Term; DTI Limit",
    formula: "Affordable Payment = Income × DTI Limit - Debt Payments; Max Purchase Price derived from payment, rate, and term",
    outputs: "Max Affordable Price; Max Monthly Payment; Loan Amount",
  },
  "subscription-cost": {
    inputs: "Monthly Fee; Annual Fee Increase; Number Of Years; Users; Setup Fee",
    formula: "Lifetime Cost = Sum of monthly fees over time + setup fees; Per-user cost = Lifetime Cost / Users",
    outputs: "Monthly Cost; Annual Cost; Lifetime Cost",
  },
  "loan-payment": {
    inputs: "Loan Principal; Interest Rate; Term; Payment Frequency",
    formula: "Payment = P × r × (1 + r)^n / ((1 + r)^n - 1)",
    outputs: "Monthly Payment; Total Paid; Total Interest",
  },
  "loan-affordability": {
    inputs: "Monthly Budget; Interest Rate; Term; Down Payment; Other Debts",
    formula: "Affordable Principal = Present Value of the maximum payment budget after debt and payment constraints",
    outputs: "Max Loan Amount; Max Payment; Affordable Range",
  },
  "extra-payment-payoff": {
    inputs: "Loan Balance; Interest Rate; Required Payment; Extra Monthly Payment",
    formula: "Payoff Months = NPER(rate, payment + extra, balance)",
    outputs: "Months To Payoff; Interest Saved; New Payoff Date",
  },
  "debt-consolidation-savings": {
    inputs: "Current Monthly Debt Payments; New Consolidated Payment; Consolidation Fee; Term",
    formula: "True Savings = Current Debt Interest − Consolidated Loan Interest, calculated with amortization for each loan",
    outputs: "Monthly Savings; Total Savings; Break-Even Month",
  },
  "personal-loan-apr": {
    inputs: "Loan Amount; Upfront Fees; Monthly Payment; Term",
    formula: "APR = annualized interest rate implied by amount financed, fees, payment, and term",
    outputs: "APR %; Total Cost; Finance Charge",
  },
  "amortization-schedule": {
    inputs: "Principal; Interest Rate; Term; Payment Frequency",
    formula: "Balance_t = P(1 + r)^t - Payment × [((1 + r)^t - 1) / r]",
    outputs: "Remaining Balance; Interest By Period; Principal Paid",
  },
  "simple-interest-loan": {
    inputs: "Principal; Rate; Time",
    formula: "Simple Interest = Principal × Rate × Time; Total Due = Principal + Interest",
    outputs: "Interest; Total Due; Effective Cost",
  },
  "balloon-loan": {
    inputs: "Principal; Rate; Term; Balloon Amount",
    formula: "Regular Payment solved on amortized balance with a final balloon due at maturity",
    outputs: "Monthly Payment; Balloon Payment; Total Interest",
  },
  "refinance-savings": {
    inputs: "Current Payment; New Payment; Months Remaining; Closing Costs",
    formula: "Refinance Savings = (Current Payment - New Payment) × Months Remaining - Closing Costs",
    outputs: "Monthly Savings; Total Savings; Break-Even Months",
  },
  "biweekly-payment": {
    inputs: "Loan Payment; Interest Rate; Term",
    formula: "Biweekly Payment = Monthly Payment / 2; Interest Saved = Standard Amortization Interest − Biweekly Amortization Interest",
    outputs: "Biweekly Payment; Interest Saved; Time Saved",
  },
  "debt-to-income-loan": {
    inputs: "Gross Monthly Income; Monthly Debt Payments; Proposed Housing Payment",
    formula: "DTI = (Debt Payments + Proposed Housing Payment) / Gross Monthly Income × 100",
    outputs: "Front-End DTI; Back-End DTI; Approval Risk",
  },
  "secured-vs-unsecured-loan": {
    inputs: "Loan Amount; Secured APR; Unsecured APR; Collateral Value",
    formula: "Comparison = Secured payment/cost versus unsecured payment/cost under different risk premiums",
    outputs: "Secured Cost; Unsecured Cost; Cost Difference",
  },
  "student-loan-payoff": {
    inputs: "Balance; Interest Rate; Required Payment; Extra Payment",
    formula: "Payoff Time = NPER(rate, payment + extra, balance); Savings = Interest without extra - Interest with extra",
    outputs: "Payoff Months; Interest Saved; Payoff Date",
  },
  "auto-loan-payment": {
    inputs: "Vehicle Price; Down Payment; Interest Rate; Term; Taxes/Fees",
    formula: "Payment = Amortized loan amount after down payment and fees",
    outputs: "Monthly Payment; Total Interest; Loan Amount",
  },
  "loan-term-comparison": {
    inputs: "Loan Principal; Interest Rate; Short Term; Long Term",
    formula: "Compare two amortized loans to show payment difference versus total interest difference",
    outputs: "Short-Term Payment; Long-Term Payment; Interest Gap",
  },
  "interest-only-loan": {
    inputs: "Principal; Interest Rate; Interest-Only Term; Amortization Term",
    formula: "Interest-Only Payment = Principal × Rate / Payment Frequency",
    outputs: "Interest-Only Payment; Future Amortized Payment; Total Interest",
  },
  "prepayment-penalty": {
    inputs: "Prepaid Amount; Penalty Rate; Penalty Cap; Remaining Balance",
    formula: "Penalty = min(Prepaid Amount × Penalty Rate, Penalty Cap)",
    outputs: "Penalty Owed; Net Savings; Prepayment Threshold",
  },
  "mortgage-payment": {
    inputs: "Home Price; Down Payment; Interest Rate; Term; Taxes & Insurance",
    formula: "Monthly P&I = Loan Amount × r × (1 + r)^n / ((1 + r)^n - 1)",
    outputs: "Monthly Payment; Total Interest; Loan Amount",
  },
  "home-affordability": {
    inputs: "Income (before expenses); Monthly Debts; Down Payment; Rate; Term; DTI",
    formula: "Affordable Home Price = loan amount supported by income, debt load, and DTI cap",
    outputs: "Max Home Price; Max Monthly Payment; Affordability Range",
  },
  "down-payment": {
    inputs: "Home Price; Down Payment Percent; Savings Amount",
    formula: "Down Payment = Home Price × Down Payment %",
    outputs: "Required Down Payment; Remaining Loan Amount; Funding Gap",
  },
  "pmi": {
    inputs: "Loan Amount; Pmi Rate; Ltv Threshold; Monthly Premium Method",
    formula: "PMI = Loan Amount × PMI Rate until LTV drops below threshold",
    outputs: "Monthly Pmi; Pmi End Month; Lifetime Pmi Cost",
  },
  "refinance-break-even": {
    inputs: "Closing Costs; Monthly Savings; Refi Term; Old Rate; New Rate",
    formula: "Break-even Months = Closing Costs / Monthly Savings",
    outputs: "Break-Even Month; Total Savings; Refi Decision Flag",
  },
  "closing-cost": {
    inputs: "Loan Amount; Lender Fees; Title Fees; Prepaids; Escrow Deposits",
    formula: "Closing Costs = Lender Fees + Title Fees + Prepaids + Escrow Deposits",
    outputs: "Total Closing Costs; Cash To Close; Fee Breakdown",
  },
  "mortgage-amortization": {
    inputs: "Principal; Rate; Term; Extra Principal",
    formula: "Remaining Balance_t = amortized balance after each payment and optional extra principal",
    outputs: "Balance Schedule; Interest Schedule; Paid-Off Month",
  },
  "rent-vs-buy": {
    inputs: "Monthly Rent; Home Price; Down Payment; Rate; Holding Years; Maintenance",
    formula: "Compare PV of renting versus owning = mortgage + taxes + maintenance - equity build-up",
    outputs: "Cheaper Option; Break-Even Year; Total Cost Difference",
  },
  "property-tax-estimator": {
    inputs: "Property Value; Tax Rate; Assessment Ratio; Exemptions",
    formula: "Annual Tax = ((Property Value × Assessment Ratio) × Tax Rate) - Exemptions",
    outputs: "Annual Tax; Monthly Tax; Effective Tax Rate",
  },
  "hoa-fee": {
    inputs: "Hoa Monthly Dues; Special Assessment; Reserve Contribution; Years",
    formula: "HOA Total = Monthly Dues × Months + Special Assessments",
    outputs: "Monthly Hoa; Annual Hoa; Lifetime Hoa Cost",
  },
  "escrow": {
    inputs: "Property Tax; Home Insurance; Flood Insurance; Other Escrow Items",
    formula: "Monthly Escrow = (Property Tax + Insurance + Other Items) / 12",
    outputs: "Monthly Escrow; Annual Escrow; Initial Escrow Deposit",
  },
  "extra-principal-mortgage": {
    inputs: "Mortgage Balance; Rate; Regular Payment; Extra Principal",
    formula: "Payoff Time and Interest Saved are recalculated after adding extra principal each month",
    outputs: "Time Saved; Interest Saved; New Payoff Date",
  },
  "fixed-vs-adjustable-mortgage": {
    inputs: "Fixed Rate; Arm Intro Rate; Reset Rate; Term; Adjustment Caps",
    formula: "Compare fixed loan cost versus ARM cost under intro and reset scenarios",
    outputs: "Fixed Payment; Arm Payment; Risk-Adjusted Difference",
  },
  "mortgage-points": {
    inputs: "Loan Amount; Points Cost; Rate Reduction; Hold Period",
    formula: "Break-even Months = Points Cost / Monthly Interest Savings",
    outputs: "Points Cost; Monthly Savings; Break-Even Time",
  },
  "home-equity": {
    inputs: "Home Value; Mortgage Balance; Heloc Balance; Other Liens",
    formula: "Home Equity = Home Value - Mortgage Balance - Other Liens",
    outputs: "Equity Value; Ltv; Borrowable Equity",
  },
  "recast-mortgage": {
    inputs: "Mortgage Balance; Lump Sum Payment; Rate; Remaining Term",
    formula: "New Payment = Reamortized balance after lump sum over remaining term",
    outputs: "New Payment; Payment Savings; Balance After Recast",
  },
  "first-time-buyer-budget": {
    inputs: "Income (before expenses); Debts; Emergency Savings; Down Payment; Closing Costs",
    formula: "Safe Home Budget = income-based housing cap minus debts, closing costs, and reserve requirements",
    outputs: "Safe Purchase Price; Monthly Housing Cap; Cash Reserve Remaining",
  },
  "savings-goal-timeline": {
    inputs: "Goal Amount; Current Balance; Monthly Contribution; Interest Rate",
    formula: "Timeline = log(Goal / Current) or FV-based months with contributions and compounding",
    outputs: "Months To Goal; Target Date; Projected Balance",
  },
  "compound-savings": {
    inputs: "Starting Balance; Regular Contribution; Monthly Rate; Years; Compounding Frequency",
    formula: "FV = P(1+r/n)^(nt) + PMT×[((1+r/n)^(nt)−1)/(r/n)], using standard annuity-immediate compounding",
    outputs: "Future Savings; Total Deposits; Interest Earned",
  },
  "high-yield-savings": {
    inputs: "Principal; Apy; Monthly Deposit; Years",
    formula: "End Balance = principal grown at APY plus recurring deposits",
    outputs: "Ending Balance; Interest Earned; Monthly Interest",
  },
  "rainy-day-fund": {
    inputs: "Essential Expenses; Coverage Months; Current Savings (available cash)",
    formula: "Rainy Day Target = Essential Expenses × Coverage Months",
    outputs: "Target Fund; Gap To Target; Coverage Achieved",
  },
  "travel-savings": {
    inputs: "Trip Cost; Current Savings (available cash); Monthly Contribution; Departure Date",
    formula: "Months Needed = ceil((Trip Cost - Current Savings) / Monthly Contribution)",
    outputs: "Monthly Target; Months To Save; Trip-Ready Date",
  },
  "school-savings": {
    inputs: "Education Goal; Current Savings (available cash); Monthly Contribution; Years",
    formula: "Projected Education Fund = current savings grown plus contributions toward target tuition",
    outputs: "Funding Gap; Monthly Target; Projected Balance",
  },
  "holiday-savings": {
    inputs: "Holiday Budget; Monthly Contribution; Start Date; Months Available",
    formula: "Monthly Savings = Holiday Budget / Months Available",
    outputs: "Monthly Target; Goal Date; Shortfall",
  },
  "monthly-savings-rate": {
    inputs: "Monthly Savings; Monthly Income (before deductions)",
    formula: "Savings Rate = Monthly Savings / Monthly Income × 100",
    outputs: "Savings Rate; Annual Savings Rate; Net Cash Retained",
  },
  "automatic-savings": {
    inputs: "Auto Transfer Amount; Frequency; Years; Growth Rate",
    formula: "Total Saved = Transfer Amount × Number of Transfers + Compounded interest if applicable",
    outputs: "Total Automatic Savings; Projected Growth; Transfer Count",
  },
  "savings-withdrawal": {
    inputs: "Starting Balance; Withdrawal Amount; Return Rate; Inflation Rate",
    formula: "Sustainable Withdrawal = balance adjusted by return minus withdrawals over time",
    outputs: "Funds Lasting; Remaining Balance; Monthly Safe Withdrawal",
  },
  "goal-gap": {
    inputs: "Target Goal; Current Savings (available cash); Projected Savings",
    formula: "Goal Gap = Target Goal - Current/Projected Savings",
    outputs: "Gap Amount; Progress %; Monthly Catch-Up",
  },
  "short-term-savings": {
    inputs: "Target Amount; Timeline; Current Balance; Monthly Savings",
    formula: "Short-Term Target = amount saved over a short horizon with low-risk return assumptions",
    outputs: "Monthly Target; Projected Balance; Gap",
  },
  "cash-reserve": {
    inputs: "Monthly Expenses; Reserve Months; Current Reserve",
    formula: "Cash Reserve Target = Monthly Expenses × Reserve Months",
    outputs: "Target Reserve; Excess/Shortfall; Coverage Months",
  },
  "savings-ladder": {
    inputs: "Goal Total; Number Of Rungs; Time Periods",
    formula: "Contribution_i = (Goal_i − Current_i) / Months_i; Total Monthly Savings = Σ Contribution_i",
    outputs: "Per-Rung Target; Total Goal Progress; Next Rung Amount",
  },
  "sinking-fund": {
    inputs: "Future Expense; Months Until Expense; Current Savings (available cash)",
    formula: "Periodic Contribution = (Future Expense - Current Savings) / Months Until Expense",
    outputs: "Monthly Contribution; Total Funded; Shortfall",
  },
  "house-down-payment-savings": {
    inputs: "Down Payment Target; Current Savings (available cash); Monthly Contribution; Rate",
    formula: "Months Needed = log-based or FV-based savings timeline to the house down payment target",
    outputs: "Months To Target; Required Monthly Savings; Projected Down Payment Date",
  },
  "compound-interest": {
    inputs: "Principal; Rate; Years; Compounding Frequency",
    formula: "FV = P(1 + r/n)^(n×t) + PMT × [((1 + r/n)^(n×t) - 1) / (r/n)], where P = principal, PMT = periodic contribution, r = annual rate, n = compounding periods, t = years",
    outputs: "Future Value; Interest Earned; Effective Annual Yield",
  },
  "investment-growth": {
    inputs: "Starting Investment; Monthly Contribution; Rate; Years",
    formula: "Growth = starting value compounded plus recurring contributions over time",
    outputs: "Ending Balance; Contributions Total; Investment Gain",
  },
  "portfolio-allocation": {
    inputs: "Total Portfolio; Target Weights; Current Holdings",
    formula: "Target Allocation = Portfolio Value × Target Weight for each asset",
    outputs: "Target Dollar Per Asset; Over/Under Allocation; Rebalance Trades",
  },
  "dollar-cost-averaging": {
    inputs: "Periodic Investment; Share Prices; Number Of Periods",
    formula: "Average Cost = Total Invested / Total Shares Purchased",
    outputs: "Average Share Cost; Total Shares; Invested Amount",
  },
  "future-value": {
    inputs: "Present Value; Rate; Periods; Contribution",
    formula: "FV = PV(1+r)^n + PMT × [((1+r)^n - 1) / r]",
    outputs: "Future Value; Total Deposits; Total Growth",
  },
  "present-value": {
    inputs: "Future Amount; Discount Rate; Years; Payments",
    formula: "PV = FV / (1 + r)^n, where r = periodic discount rate and n = number of periods",
    outputs: "Present Value; Discount Amount; Implied Growth",
  },
  "dividend-reinvestment": {
    inputs: "Shares Owned; Dividend Yield; Share Price; Reinvestment Rate",
    formula: "Reinvested Shares = Dividends / Share Price; Portfolio grows by added shares each period",
    outputs: "New Shares; Dividend Income; Ending Value",
  },
  "mutual-fund-fee": {
    inputs: "Investment Balance; Expense Ratio; Years; Contribution",
    formula: "Fee Drag = Balance × Expense Ratio; Total fee over time compounds against returns",
    outputs: "Annual Fee; Lifetime Fee Drag; Net Ending Value",
  },
  "etf-expense": {
    inputs: "Etf Balance; Expense Ratio; Years",
    formula: "Annual ETF Fee = ETF Balance × Expense Ratio",
    outputs: "Annual Fee; Cumulative Fee; Net Return After Fees",
  },
  "asset-allocation-rebalancer": {
    inputs: "Total Portfolio; Current Weights; Target Weights",
    formula: "Trade Amount_i = Target Value_i - Current Value_i",
    outputs: "Buy/Sell Amounts; New Weights; Rebalance Drift",
  },
  "investment-return": {
    inputs: "Initial Investment; Final Value; Income/Distributions; Fees",
    formula: "Return = (Final Value + Distributions - Initial Investment - Fees) / Initial Investment × 100",
    outputs: "Total Return %; Net Profit; Annualized Return",
  },
  "risk-vs-return": {
    inputs: "Expected Return; Volatility; Downside Risk; Benchmark",
    formula: "Risk-adjusted return = Expected Return / Volatility (with downside penalty optional)",
    outputs: "Risk Score; Return Score; Risk-Adjusted Ranking",
  },
  "stock-profit": {
    inputs: "Buy Price; Sell Price; Shares; Fees",
    formula: "Profit = (Sell Price - Buy Price) × Shares - Fees",
    outputs: "Gross Profit; Net Profit; Return %",
  },
  "capital-gains": {
    inputs: "Sale Price; Cost Basis; Holding Period; Fees",
    formula: "Capital Gain = Sale Proceeds - Cost Basis - Fees",
    outputs: "Realized Gain; Taxable Gain; Gain %",
  },
  "inflation-adjusted-return": {
    inputs: "Nominal Return; Inflation Rate",
    formula: "Real Return = ((1 + Nominal Return) / (1 + Inflation Rate)) - 1",
    outputs: "Real Return %; Purchasing Power Change; Inflation Drag",
  },
  "retirement-portfolio-projection": {
    inputs: "Current Portfolio; Contributions; Return Rate; Years; Withdrawal Rate",
    formula: "Projected Portfolio = current balance compounded + recurring contributions - planned withdrawals",
    outputs: "Retirement Balance; Income Capacity; Shortfall",
  },
  "sip": {
    inputs: "Monthly Sip; Expected Return; Years",
    formula: "FV = PMT × [((1+r)^n - 1) / r] where PMT is the monthly SIP contribution",
    outputs: "Future Value; Total Invested; Wealth Created",
  },
  "retirement-income": {
    inputs: "Retirement Assets; Withdrawal Rate; Pension Income; Social Security",
    formula: "Retirement Income = Assets × Withdrawal Rate + Pension + Social Security",
    outputs: "Annual Income; Monthly Income; Income Gap",
  },
  "401k-growth": {
    inputs: "Current 401K; Employee Contribution; Employer Match; Rate; Years",
    formula: "FV = B×(1+r)^n + (C+M)×[((1+r)^n − 1)/r], where B = balance, C = contribution, M = match, r = periodic rate, n = months",
    outputs: "Ending Balance; Employer Match Total; Investment Gain",
  },
  "ira-contribution": {
    inputs: "Current Balance; Annual Contribution; Return Rate; Years",
    formula: "IRA Future Value = balance grown with annual contributions and compounding",
    outputs: "Ending IRA Value; Total Contributions; Growth Earned",
  },
  "pension-income": {
    inputs: "Pension Lump Sum; Annuity Factor; Payment Frequency",
    formula: "Monthly Income = Lump Sum / ([1 − (1+r)^−n] / r × 12), after adding rate and term inputs",
    outputs: "Monthly Pension; Annual Pension; Replacement Ratio",
  },
  "social-security-estimate": {
    inputs: "Average Indexed Earnings; Claim Age; Benefit Factor",
    formula: "Estimated Benefit = Earnings Base × Benefit Factor adjusted for claim age",
    outputs: "Monthly Benefit; Annual Benefit; Claim-Age Adjustment",
  },
  "retirement-savings-gap": {
    inputs: "Required Retirement Income; Current Portfolio; Annual Contributions; Projected Return",
    formula: "Savings Gap = Required Retirement Nest Egg - Projected Future Value",
    outputs: "Gap Amount; Funding Progress; Years To Close Gap",
  },
  "safe-withdrawal-rate": {
    inputs: "Portfolio; Withdrawal Rate; Inflation; Years",
    formula: "Sustainable Income = Portfolio × Safe Withdrawal Rate",
    outputs: "Annual Income; Monthly Income; Portfolio Survival Risk",
  },
  "early-retirement": {
    inputs: "Annual Expenses; Current Portfolio; Expected Return; Savings Rate",
    formula: "FI Number = Annual Expenses / SWR; Years to FI = LN((FI Number×r + PMT) / (Balance×r + PMT)) / LN(1 + r)",
    outputs: "Retire-By Age; FI Number; Years Remaining",
  },
  "annuity-income": {
    inputs: "Principal; Interest Rate; Payout Years; Payment Frequency",
    formula: "Annuity Payment = Principal × annuity factor based on rate and term",
    outputs: "Periodic Income; Total Payouts; Residual Value",
  },
  "retirement-withdrawal": {
    inputs: "Retirement Balance; Withdrawal Amount; Return Rate; Years",
    formula: "Ending Balance = starting balance compounded minus recurring withdrawals",
    outputs: "Years Sustainable; Ending Balance; Shortfall Risk",
  },
  "retirement-age": {
    inputs: "Current Age; Savings Rate; Expenses; Expected Return",
    formula: "Retirement Age = Current Age + Years until portfolio covers required retirement expenses",
    outputs: "Retirement Age; Years To Retire; Target Corpus",
  },
  "post-retirement-budget": {
    inputs: "Essential Expenses; Healthcare; Housing; Pension; Social Security",
    formula: "Budget Gap = Post-Retirement Expenses - Guaranteed Income",
    outputs: "Monthly Budget; Annual Budget; Income Gap",
  },
  "retirement-tax-estimator": {
    inputs: "Retirement Withdrawals; Pension; Tax Rate; Deductions",
    formula: "Tax Owed = Taxable Retirement Income × Applicable Tax Rate",
    outputs: "Tax Owed; Net Income; Effective Tax Rate",
  },
  "longevity-planning": {
    inputs: "Retirement Age; Life Expectancy; Annual Spend; Inflation",
    formula: "PV = PMT × [(1 − (1+r)^−n) / r], where r = (1+return)/(1+inflation) − 1 and n = retirement years",
    outputs: "Needed Corpus; Funding Gap; Survival Horizon",
  },
  "retirement-health-cost": {
    inputs: "Annual Healthcare Cost; Inflation Rate; Retirement Years",
    formula: "Healthcare Need = Current Annual Health Cost × (1 + Inflation)^Years",
    outputs: "Lifetime Cost; Annual Average; Reserve Target",
  },
  "catch-up-contribution": {
    inputs: "Current Age; Current Savings (available cash); Annual Limit; Catch-Up Allowance",
    formula: "Allowed Contribution = Base Annual Limit + Catch-up Allowance if age threshold is met",
    outputs: "Max Contribution; Additional Catch-Up; Total Savings Potential",
  },
  "income-tax": {
    inputs: "Gross Income; Deductions; Tax Rates; Credits",
    formula: "Tax = Σ[min(Income, BracketMax_i − BracketMin_i) × Rate_i] − Credits, applied progressively across each bracket",
    outputs: "Tax Owed; Effective Tax Rate; After-Tax Income",
  },
  "sales-tax": {
    inputs: "Pre-Tax Price; Tax Rate; Discount",
    formula: "Sales Tax = Price × Tax Rate; Final Price = Price + Tax",
    outputs: "Tax Amount; Final Price; Effective Rate",
  },
  "tax-bracket": {
    inputs: "Taxable Income; Filing Status; Bracket Thresholds",
    formula: "Tax = Sum over each bracket of taxable income portion × marginal rate",
    outputs: "Bracket Reached; Tax Owed; Effective Rate",
  },
  "self-employment-tax": {
    inputs: "Net Self-Employment Income; SE Tax Rate; Deduction Percentage",
    formula: "SE Tax = (Net Income × 0.9235) × SE Rate; Deductible Amount = SE Tax × 0.5",
    outputs: "SE Tax; Deductible Amount; Net After Tax",
  },
  "capital-gains-tax": {
    inputs: "Sale Proceeds; Cost Basis; Holding Period; Tax Rate",
    formula: "Capital Gains Tax = Realized Gain × Applicable Tax Rate",
    outputs: "Tax Owed; After-Tax Gain; Gain Classification",
  },
  "vat": {
    inputs: "Net Price; VAT Rate",
    formula: "VAT = Net Price × VAT Rate; Gross Price = Net Price + VAT",
    outputs: "VAT Amount; Gross Price; VAT-Inclusive Rate",
  },
  "gst": {
    inputs: "Net Price; GST Rate",
    formula: "GST = Net Price × GST Rate; Gross Price = Net Price + GST",
    outputs: "GST Amount; Gross Price; Tax-Inclusive Price",
  },
  "payroll-tax": {
    inputs: "Payroll Base; Employer Tax Rate; Employee Tax Rate",
    formula: "Payroll Tax = Payroll Base × Applicable Payroll Tax Rates",
    outputs: "Payroll Tax; Employer Cost; Employee Net Pay",
  },
  "property-tax": {
    inputs: "Assessed Value; Mill Rate; Homestead Exemption",
    formula: "Annual Tax = max(0, ((Assessed Value - Homestead Exemption) × Mill Rate / 1000))",
    outputs: "Annual Tax; Monthly Reserve; Effective Rate",
  },
  "tax-refund-estimator": {
    inputs: "Withholding; Estimated Tax Liability; Credits; Payments",
    formula: "Refund = Total Taxes Paid - Final Tax Liability",
    outputs: "Refund/Amount Due; Effective Refund Rate; Net Tax",
  },
  "tax-deduction": {
    inputs: "Gross Income; Deductible Expenses; Deduction Limits",
    formula: "Taxable Income = Gross Income - Allowed Deductions",
    outputs: "Deduction Total; Taxable Income; Tax Savings",
  },
  "taxable-income": {
    inputs: "Gross Income; Pre-Tax Deductions; Retirement Contributions; Benefits",
    formula: "Taxable Income = Gross Income - Pre-tax Deductions - Eligible Adjustments",
    outputs: "Taxable Income; Non-Taxable Income; Tax Base",
  },
  "quarterly-tax": {
    inputs: "Annual Tax Liability; Prepayments; Estimated Payments Made",
    formula: "Quarterly Tax = (Annual Tax Liability - Prepayments) / 4",
    outputs: "Quarterly Payment; Annual Liability; Balance Due",
  },
  "bonus-tax": {
    inputs: "Bonus Amount; Supplemental Tax Rate; Pre-Tax Deductions",
    formula: "Bonus Tax = Bonus × Supplemental Tax Rate",
    outputs: "Net Bonus; Tax Withheld; Effective Rate",
  },
  "tax-withholding": {
    inputs: "Salary; Withholding Allowances; Filing Status; Pay Frequency",
    formula: "Withholding = Salary × Applicable Withholding Percentage",
    outputs: "Per-Pay Withholding; Annual Withholding; Expected Refund",
  },
  "multi-state-tax": {
    inputs: "Income (before expenses); State Allocations; State Rates; Residency Rules",
    formula: "Multi-State Tax = Sum of each state’s allocated income × state tax rate",
    outputs: "Tax By State; Total Tax; Effective Blended Rate",
  },
  "bmi": {
    inputs: "Weight; Height",
    formula: "BMI = Weight / Height^2, where weight is in kilograms and height is in meters",
    outputs: "BMI; BMI Category; Healthy Range",
  },
  "body-fat": {
    inputs: "BMI; Age; Sex; Waist Or Neck Measurements",
    formula: "Use the stated method explicitly; Navy method example: Men = 86.010×log(waist−neck) − 70.041×log(height) + 36.76; Women = 163.205×log(waist+hip−neck) − 97.684×log(height) − 78.387",
    outputs: "Body Fat %; Category; Lean Mass Estimate",
  },
  "calorie-needs": {
    inputs: "Bmr; Activity Factor; Goal Adjustment",
    formula: "Daily Calories = BMR × Activity Factor + Goal Adjustment",
    outputs: "Maintenance Calories; Cut Calories; Bulk Calories",
  },
  "bmr": {
    inputs: "Weight; Height; Age; Sex",
    formula: "BMR = Mifflin-St Jeor equation based on weight, height, age, and sex",
    outputs: "Bmr; Daily Calories; Activity-Adjusted Needs",
  },
  "ideal-weight": {
    inputs: "Height; Sex; Frame Size",
    formula: "Ideal Weight = height-based standard formula adjusted for frame size",
    outputs: "Ideal Weight Range; Target Weight; BMI Target",
  },
  "heart-rate-zone": {
    inputs: "Age; Resting Heart Rate; Zone Percentage",
    formula: "Target Zone = (Max Heart Rate - Resting HR) × Zone % + Resting HR",
    outputs: "Zone Min; Zone Max; Training Zone",
  },
  "water-intake": {
    inputs: "Body Weight; Activity Level; Climate; Exercise Minutes",
    formula: "Water Intake = Body Weight × Base Hydration Factor + activity adjustments",
    outputs: "Daily Water Goal; Exercise Adjustment; Minimum Intake",
  },
  "pregnancy-due-date": {
    inputs: "Last Menstrual Period; Cycle Length; Conception Date Optional",
    formula: "Due Date = LMP + 280 days (adjusted for cycle length)",
    outputs: "Estimated Due Date; Trimester Milestones; Gestational Age",
  },
  "ovulation": {
    inputs: "Last Period Date; Cycle Length",
    formula: "Ovulation = Period Start + 14 days (cycle-adjusted)",
    outputs: "Ovulation Date; Fertile Window; Next Period Estimate",
  },
  "waist-to-height-ratio": {
    inputs: "Waist; Height",
    formula: "WHtR = Waist Circumference / Height, using the same units for both measurements",
    outputs: "Ratio; Risk Category; Healthy Target",
  },
  "pace": {
    inputs: "Distance; Time",
    formula: "Pace = Time / Distance, expressed as time per unit distance",
    outputs: "Pace Per Km/Mile; Speed; Finish Estimate",
  },
  "steps-to-calories": {
    inputs: "Steps; Stride Length; Weight; Intensity",
    formula: "Calories = Steps × stride factor × calorie-per-step factor adjusted for body weight",
    outputs: "Calories Burned; Distance Walked; Activity Estimate",
  },
  "sleep-duration": {
    inputs: "Bedtime; Wake Time; Sleep Cycles",
    formula: "Sleep Duration = Wake Time - Bedtime (optionally adjusted to complete cycles)",
    outputs: "Sleep Hours; Cycle Completion; Suggested Bedtime",
  },
  "protein-intake": {
    inputs: "Body Weight; Activity Goal; Protein Ratio",
    formula: "Protein Need = Body Weight × Grams per kg based on goal",
    outputs: "Daily Protein Grams; Per-Meal Grams; Goal Range",
  },
  "body-surface-area": {
    inputs: "Weight; Height",
    formula: "BSA = sqrt((Height × Weight) / 3600) or equivalent standard formula",
    outputs: "Bsa; Dose Estimate Support; Size Category",
  },
  "hydration-goal": {
    inputs: "Weight; Activity Level; Climate; Sweat Rate",
    formula: "Hydration Goal = Weight × baseline fluid factor + exercise and heat adjustments",
    outputs: "Daily Hydration Goal; Exercise Adjustment; Heat Adjustment",
  },
  "percentage": {
    inputs: "Part; Whole; Change Values",
    formula: "Percentage = Part / Whole × 100; Change % = (New - Old) / Old × 100",
    outputs: "Percent; Difference %; Fraction Equivalent",
  },
  "scientific": {
    inputs: "Expression; Constants; Functions",
    formula: "Scientific result = evaluated expression using trig, logs, powers, and constants",
    outputs: "Expression Result; Angle/Unit Normalization; Stored Expression Value",
  },
  "fraction": {
    inputs: "Numerator; Denominator; Operation",
    formula: "Fraction Result = simplify, add, subtract, multiply, or divide fractions using common denominators",
    outputs: "Simplified Fraction; Mixed Number; Decimal",
  },
  "ratio": {
    inputs: "Value A; Value B",
    formula: "Ratio = A : B simplified by greatest common factor",
    outputs: "Simplified Ratio; Decimal Ratio; Share Percentages",
  },
  "proportion": {
    inputs: "Known Ratio Terms; Unknown Term",
    formula: "Cross-Multiplication: a/b = c/d => d = (b × c) / a",
    outputs: "Missing Value; Matched Proportion; Consistency Check",
  },
  "exponent": {
    inputs: "Base; Exponent",
    formula: "Result = Base ^ Exponent, raising the base to the specified power",
    outputs: "Power Result; Inverse Root Equivalent; Log Equivalent",
  },
  "logarithm": {
    inputs: "Value (numeric amount); Base",
    formula: "Logarithm = log(Value) / log(Base)",
    outputs: "Log Result; Exponent Check; Natural Log Equivalent",
  },
  "square-root": {
    inputs: "Number (any positive value)",
    formula: "Square Root = Number^(1/2) or √Number, for any non-negative input",
    outputs: "Root; Squared Check; Nearest Perfect Square",
  },
  "triangle": {
    inputs: "Base; Height; Sides; Angle",
    formula: "Area = 0.5 × Base × Height or Heron’s formula when three sides are given",
    outputs: "Area; Perimeter; Missing Side/Angle",
  },
  "circle-area": {
    inputs: "Radius; Diameter Optional",
    formula: "Area = π × Radius^2, where radius is the circle’s radius",
    outputs: "Area; Circumference; Radius From Diameter",
  },
  "volume": {
    inputs: "Length; Width; Height; Shape",
    formula: "Volume = Length × Width × Height for prisms, with shape-specific variants for cylinders/spheres",
    outputs: "Volume; Surface Area; Capacity Equivalent",
  },
  "standard-deviation": {
    inputs: "Data Set (comma-separated values, e.g. 10, 20, 30)",
    formula: "Std Dev = sqrt(Σ(x - mean)^2 / n) or sample version with n-1",
    outputs: "Standard Deviation; Variance; Mean",
  },
  "mean-median-mode": {
    inputs: "Data Set (comma-separated values, e.g. 10, 20, 30)",
    formula: "Mean = average(values); Median = middle value; Mode = most frequent value",
    outputs: "Mean; Median; Mode",
  },
  "permutation": {
    inputs: "Total Items (n); Items Chosen (r)",
    formula: "nPr = n! / (n-r)!, where n = total items and r = selected items",
    outputs: "Permutations; Factorial Values; Arrangement Count",
  },
  "combination": {
    inputs: "Total Items (n); Items Chosen (r)",
    formula: "nCr = n! / (r! × (n-r)!), where n = total items and r = selected items",
    outputs: "Combinations; Subset Count; Symmetry Check",
  },
  "random-number": {
    inputs: "Minimum; Maximum; Decimal Precision",
    formula: "Random = floor(min + rand() × (max - min))",
    outputs: "Generated Number; Range; Seed/Control Note",
  },
  "rounding": {
    inputs: "Number (any positive value); Decimal Places; Rounding Mode",
    formula: "Rounded Value = round(Number, Decimal Places)",
    outputs: "Rounded Number; Difference; Truncated Value",
  },
  "greatest-common-factor": {
    inputs: "Number A; Number B",
    formula: "GCF = greatest shared divisor found by Euclidean algorithm",
    outputs: "GCF; Reduced Fraction Support; Factor List",
  },
  "least-common-multiple": {
    inputs: "Number A; Number B",
    formula: "LCM = |A × B| / GCF(A, B), where GCF is the greatest common factor",
    outputs: "Lcm; Multiple List; Factor Relationship",
  },
  "quadratic-formula": {
    inputs: "Coefficient a; Coefficient b; Constant c",
    formula: "x = (-b ± √(b² - 4ac)) / (2a), for a ≠ 0",
    outputs: "Roots; Discriminant; Vertex Info",
  },
  "length-converter": {
    inputs: "Value (numeric amount); From Unit (source unit); To Unit (target unit)",
    formula: "Converted Length = Value × Unit Conversion Factor",
    outputs: "Converted Value; Factor Used; Reverse Conversion",
  },
  "weight-converter": {
    inputs: "Value (numeric amount); From Unit (source unit); To Unit (target unit)",
    formula: "Converted Weight = Value × Mass Conversion Factor",
    outputs: "Converted Value; Factor; Equivalent Units",
  },
  "temperature-converter": {
    inputs: "Value (numeric amount); From Scale; To Scale",
    formula: "Converted Temperature uses C↔F↔K transformation formulas",
    outputs: "Converted Value; Original Scale; Target Scale",
  },
  "currency-converter": {
    inputs: "Amount; From Currency; To Currency; Exchange Rate",
    formula: "Converted Amount = Amount × Exchange Rate",
    outputs: "Converted Value; Rate; Inverse Rate",
  },
  "area-converter": {
    inputs: "Area Value; From Unit (source unit); To Unit (target unit)",
    formula: "Converted Area = Area × (Length Factor)^2",
    outputs: "Converted Area; Factor Squared; Equivalent Units",
  },
  "volume-converter": {
    inputs: "Volume Value; From Unit (source unit); To Unit (target unit)",
    formula: "Converted Volume = Volume × (Length Factor)^3",
    outputs: "Converted Volume; Cubed Factor; Equivalent Units",
  },
  "speed-converter": {
    inputs: "Speed Value; From Unit (source unit); To Unit (target unit)",
    formula: "Converted Speed = Distance/Time ratio transformed by unit factors",
    outputs: "Converted Speed; Factor; Alternate Units",
  },
  "pressure-converter": {
    inputs: "Pressure Value; From Unit (source unit); To Unit (target unit)",
    formula: "Converted Pressure = Pressure × Pressure Conversion Factor",
    outputs: "Converted Pressure; Factor; Equivalent Units",
  },
  "time-converter": {
    inputs: "Time Value; From Unit (source unit); To Unit (target unit)",
    formula: "Converted Time = Time × Time Conversion Factor",
    outputs: "Converted Time; Factor; Day/Hour Breakdown",
  },
  "data-size-converter": {
    inputs: "Data Size; From Unit (source unit); To Unit (target unit)",
    formula: "Converted Size = Data × 1024-based or 1000-based storage factor",
    outputs: "Converted Size; Factor; Bits/Bytes Equivalent",
  },
  "power-converter": {
    inputs: "Power Value; From Unit (source unit); To Unit (target unit)",
    formula: "Converted Power = Power × Power Conversion Factor",
    outputs: "Converted Power; Factor; Equivalent Unit",
  },
  "energy-converter": {
    inputs: "Energy Value; From Unit (source unit); To Unit (target unit)",
    formula: "Converted Energy = Energy × Energy Conversion Factor",
    outputs: "Converted Energy; Factor; Equivalent Unit",
  },
  "fuel-economy-converter": {
    inputs: "Fuel Economy Value; From Unit (source unit); To Unit (target unit)",
    formula: "Fuel Economy converts between mpg, L/100km, km/L, and related units using reciprocal factors",
    outputs: "Converted Economy; Factor; Inverse Economy",
  },
  "cooking-unit-converter": {
    inputs: "Value (numeric amount); From Unit (source unit); To Unit (target unit)",
    formula: "Converted Cooking Unit = Value × Cooking Measurement Factor",
    outputs: "Converted Value; Factor; Kitchen Equivalent",
  },
  "angle-converter": {
    inputs: "Angle Value; From Unit (source unit); To Unit (target unit)",
    formula: "Converted Angle = Angle × Angle Conversion Factor",
    outputs: "Converted Angle; Radians/Degrees/Gradians; Factor",
  },
  "profit-margin": {
    inputs: "Revenue; Cost Of Goods Sold; Other Costs",
    formula: "Profit Margin = (Revenue - Costs) / Revenue × 100",
    outputs: "Profit Margin; Gross Profit; Net Profit",
  },
  "markup": {
    inputs: "Cost; Selling Price",
    formula: "Markup = (Selling Price - Cost) / Cost × 100",
    outputs: "Markup %; Markup Amount; Retail Price",
  },
  "break-even-sales": {
    inputs: "Fixed Costs; Variable Cost Per Unit; Selling Price Per Unit",
    formula: "Break-even Sales = Fixed Costs / Contribution Margin Ratio",
    outputs: "Break-Even Revenue; Break-Even Units; Profit Zone",
  },
  "business-loan": {
    inputs: "Loan Amount; Rate; Term; Fees",
    formula: "Business Loan Payment = amortized loan payment with fees included in effective cost",
    outputs: "Monthly Payment; Total Cost; Interest Expense",
  },
  "cash-runway": {
    inputs: "Cash Balance; Monthly Burn; Monthly Revenue",
    formula: "Runway Months = Cash Balance / (Monthly Burn - Monthly Revenue)",
    outputs: "Runway Months; Burn Rate; Cash Left",
  },
  "employee-cost": {
    inputs: "Salary; Benefits; Payroll Taxes; Equipment/Overhead",
    formula: "Employee Cost = Salary + Benefits + Taxes + Overhead",
    outputs: "Total Employee Cost; Monthly Cost; Loaded Rate",
  },
  "payroll-budget": {
    inputs: "Headcount; Average Salary; Payroll Tax Rate; Benefits Rate",
    formula: "Payroll Budget = Headcount × (Average Salary + Taxes + Benefits)",
    outputs: "Annual Payroll; Monthly Payroll; Average Loaded Salary",
  },
  "pricing-strategy": {
    inputs: "Unit Cost; Target Margin; Overhead Allocation; Discount Allowance",
    formula: "Price = (Unit Cost + Overhead Allocation) / (1 - Target Margin)",
    outputs: "Suggested Price; Margin At Price; Discount Floor",
  },
  "revenue-growth": {
    inputs: "Previous Revenue; Current Revenue; Periods",
    formula: "Revenue Growth = (Current Revenue - Previous Revenue) / Previous Revenue × 100",
    outputs: "Growth Rate; Incremental Revenue; Annualized Growth",
  },
  "inventory-turnover": {
    inputs: "Cost Of Goods Sold; Average Inventory",
    formula: "Inventory Turnover = COGS / Average Inventory",
    outputs: "Turnover Ratio; Days Inventory; Stock Efficiency",
  },
  "sales-commission-planner": {
    inputs: "Sales Target; Commission Rate; Tier Bonus; Quota",
    formula: "Planned Commission = Sales × Rate + Tier Bonuses",
    outputs: "Expected Commission; Total Payout; Quota Attainment",
  },
  "startup-burn-rate": {
    inputs: "Monthly Expenses; Monthly Revenue; Cash Reserve",
    formula: "Burn Rate = Monthly Expenses - Monthly Revenue",
    outputs: "Monthly Burn; Runway Months; Break-Even Month",
  },
  "invoice-due-date": {
    inputs: "Invoice Date; Payment Terms Days; Holiday Adjustment",
    formula: "Due Date = Invoice Date + Payment Terms Days",
    outputs: "Due Date; Days Remaining; Late Fee Date",
  },
  "project-cost": {
    inputs: "Labor; Materials; Overhead; Contingency",
    formula: "Project Cost = Labor + Materials + Overhead + Contingency",
    outputs: "Total Project Cost; Cost Per Milestone; Contingency Amount",
  },
  "conversion-rate": {
    inputs: "Conversions; Visitors/Sessions",
    formula: "Conversion Rate = Conversions / Visitors × 100",
    outputs: "Conversion Rate; Target Gap; Traffic Needed",
  },
  "customer-lifetime-value": {
    inputs: "Average Order Value; Purchase Frequency; Gross Margin; Retention Period",
    formula: "CLV = AOV × Purchase Frequency × Gross Margin × Customer Lifetime",
    outputs: "Clv; Payback Window; Allowable Cac",
  },
  "marketing-roi": {
    inputs: "Incremental Revenue; Marketing Cost; Gross Margin",
    formula: "Marketing ROI = (Incremental Revenue × Gross Margin - Marketing Cost) / Marketing Cost × 100",
    outputs: "ROI %; Net Profit; ROAS-Like Return",
  },
  "operating-expense": {
    inputs: "Rent; Payroll; Utilities; Software; Other Overhead",
    formula: "Operating Expense = Sum of operating cost categories",
    outputs: "Total Opex; Monthly Opex; Annual Opex",
  },
  "gross-profit": {
    inputs: "Revenue; COGS",
    formula: "Gross Profit = Revenue - COGS; Gross Margin = (Gross Profit / Revenue) × 100",
    outputs: "Gross Profit; Gross Margin; Cost Ratio",
  },
  "age": {
    inputs: "Date Of Birth; Reference Date",
    formula: "Age = Reference Date - Date of Birth",
    outputs: "Years; Months; Days",
  },
  "date-difference": {
    inputs: "Start Date; End Date",
    formula: "Difference = End Date - Start Date",
    outputs: "Days; Weeks; Months",
  },
  "work-hours": {
    inputs: "Start Time; End Time; Break Duration; Days Worked",
    formula: "Work Hours = (End Time - Start Time - Breaks) × Days Worked",
    outputs: "Total Hours; Overtime Hours; Net Work Time",
  },
  "countdown-timer": {
    inputs: "Target Date/Time; Current Date/Time",
    formula: "Countdown = Target Date - Current Date",
    outputs: "Days Left; Hours Left; Minutes Left",
  },
  "gpa": {
    inputs: "Course Grades; Credit Hours",
    formula: "GPA = Sum(Grade Points × Credits) / Sum(Credits)",
    outputs: "Gpa; Credits Completed; Target Gpa Gap",
  },
  "grade": {
    inputs: "Earned Marks; Possible Marks; Weighting",
    formula: "Grade % = Earned Marks / Possible Marks × 100",
    outputs: "Percentage Grade; Letter Grade; Remaining Points",
  },
  "tip": {
    inputs: "Bill; Tip Percentage; People",
    formula: "Tip = Bill × Tip %; Total = Bill + Tip",
    outputs: "Tip Amount; Total Bill; Per-Person Share",
  },
  "split-bill": {
    inputs: "Total Bill; Tip; Number Of People; Weights Optional",
    formula: "Share = (Bill + Tip) / People or weighted share by weights",
    outputs: "Per-Person Amount; Tip Share; Settlement Balances",
  },
  "concrete": {
    inputs: "Length; Width; Thickness; Waste Factor",
    formula: "Concrete Volume = Length × Width × Thickness × (1 + Waste Factor)",
    outputs: "Cubic Yards/Meters; Bag Count; Waste Allowance",
  },
  "tile": {
    inputs: "Floor Area; Tile Size; Waste Factor",
    formula: "Tiles Needed = Floor Area / Tile Area × (1 + Waste Factor)",
    outputs: "Tiles Required; Boxes Needed; Waste Allowance",
  },
  "area": {
    inputs: "Shape; Dimensions",
    formula: "Area = shape-specific formula such as length × width, πr², or 0.5 × base × height",
    outputs: "Area; Perimeter; Shape Helper",
  },
  "binary-to-decimal": {
    inputs: "Binary Digits",
    formula: "Decimal = Σ(bit_i × 2^position_i), scanning bits from right to left",
    outputs: "Decimal Value; Binary Length; Parity",
  },
  "hex-to-decimal": {
    inputs: "Hex Digits",
    formula: "Decimal = Σ(hex digit × 16^position)",
    outputs: "Decimal Value; Hex Length; Base16 Breakdown",
  },
  "ascii-converter": {
    inputs: "Character Or Code; Mode",
    formula: "ASCII = map character to code or code to character using ASCII table",
    outputs: "Character; Code; Binary/Hex Equivalent",
  },
  "roman-numeral": {
    inputs: "Roman Numeral Or Integer",
    formula: "Roman conversion = parse additive/subtractive numeral rules or format integer into Roman symbols",
    outputs: "Roman Numeral; Integer; Validation Status",
  },
} as const;

export default calculatorFieldOverrides;

<%@page import="java.util.Properties"%>
<%@page import="com.ipn.PaymentTester"%>
<%
	StringBuilder sb = new StringBuilder();

	sb.append(request.getScheme()).append("://")
			.append(request.getServerName()).append(":")
			.append(request.getServerPort())
			.append(request.getContextPath()).append("/hbnb/payerinfo.jsp");

	//System.out.println(sb);
	//String amt = request.getParameter("donate_amt");
	String amt = "300";
	
	
	Properties data = PaymentTester.getInstance().getPaymentURL(
			sb.toString(),amt);
	request.setAttribute("pay_token", data.get("payment_id"));
	session.setAttribute("PROPERTIES", data);
	response.sendRedirect("" + data.get("redirect_url"));
%>
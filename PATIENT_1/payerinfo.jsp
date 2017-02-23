<%@page import="java.util.Properties"%>
<%@page import="com.ipn.PaymentTester"%>
<%
	//out.print(request.getParameter("PayerID"));
	Properties data = (Properties) session.getAttribute("PROPERTIES");
	data.setProperty("payer_id", request.getParameter("PayerID"));
	String jsonString = PaymentTester.getInstance().makePayment(data);
	//out.print(request.getParameter("PayerID"));
%>
<script>
document.location.href="thx.html";
</script>	
<pre>
<%=jsonString%>
</pre>